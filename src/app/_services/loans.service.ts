import { Injectable } from '@angular/core';
import { Loan } from '../_models/loan.model';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { User } from 'firebase/app';
import { UserApp } from '../_models/user.model';
import { ErrorHandler } from '../app.error-handler';

@Injectable()
export class LoansService {

    userUID: string;
    userName: string;
    userEmail: string;

    usersEndPoint: any;
    userLoansEndPoint: any;
    userLoansRecentsEndPoint: any;

    users: Observable<UserApp>[];

    constructor(private database: AngularFireDatabase, private firebaseAuth: AngularFireAuth) {
        this.userUID = firebaseAuth.auth.currentUser.uid;
        this.userName = firebaseAuth.auth.currentUser.displayName;
        this.userEmail = firebaseAuth.auth.currentUser.email;
    }

    retrieveAllUserLoans(): Observable<Loan[]> {
        this.userLoansEndPoint = this.database.list<Loan>(`/user-loans/${this.userUID}`);
        return this.userLoansEndPoint.snapshotChanges().map(loans => {
            return loans.map(loan => {
                const data = loan.payload.val();
                data.uid = loan.key;
                return { ...data };
            });
          });
    }

    retrieveRecentsLoans(): Observable<Loan[]> {
        this.userLoansRecentsEndPoint = this.database.list<Loan>(`/user-loans/${this.userUID}`);
        return this.userLoansRecentsEndPoint.snapshotChanges().map(loans => {
            return loans.map(a => {
                const data = a.payload.val();
                data.uid = a.key;
                return { ...data };
            });
          }).map(list => list.reverse());
    }

    markedAsReturned(loan: Loan) {
        this.userLoansEndPoint.update(loan.uid, { returned: true })
            .catch(ErrorHandler.handleError);
    }

    registerNewLoan(loan: Loan) {
        const name = loan.favored.name;
        const email = loan.favored.email;

        if (loan.favored.phone === undefined) {
            loan.favored.phone = '';
        }

        console.log(loan.favored.phone);

        this.userLoansEndPoint.push(loan);
        this.database.list<Loan>(`/loans/`).push(loan);

        // USER-BORROWED REGISTER
        this.usersEndPoint = this.database.list<UserApp>(`/users/`);
        /** Restrieve all users registered */
        this.users = this.usersEndPoint.snapshotChanges().map(users => {
                            return users.map(a => {
                                const data = a.payload.val();
                                data.uid = a.key;
                                return { ...data };
                            });
                        });

        /** Replace the favored to Current User */
        loan.favored.uid = '';
        loan.favored.name = this.userName;
        loan.favored.email = this.userEmail;
        loan.favored.phone = '';

        /** Retrieve the uid of the User that will be receive the loan */
        this.users.forEach(users => {
            users.forEach(user => {
                if (email === user.email) {
                    this.database.list<Loan>(`/user-borrowed/${user.uid}`).push(loan);
                }
            });
        });
    }
}
