import { Injectable } from '@angular/core';
import { Loan } from '../_models/loan.model';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { User } from 'firebase/app';
import { ErrorHandler } from '../app.error-handler';

@Injectable()
export class LoansService {

    userUID: string;
    userLoansEndPoint: any;
    userLoansRecentsEndPoint: any;

    constructor(private database: AngularFireDatabase, private firebaseAuth: AngularFireAuth) {
        this.userUID = firebaseAuth.auth.currentUser.uid;
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
}
