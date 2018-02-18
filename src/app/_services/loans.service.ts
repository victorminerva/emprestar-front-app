import { Injectable } from '@angular/core';
import { Loan } from '../_models/loan.model';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { User } from 'firebase/app';

@Injectable()
export class LoansService {

    userUID: string;
    loans: any;
    recents: Observable<Loan[]>;

    constructor(private database: AngularFireDatabase, private firebaseAuth: AngularFireAuth) {
        this.userUID = firebaseAuth.auth.currentUser.uid;
    }

    retrieveAllUserLoans(): Observable<Loan[]> {
        this.loans = this.database.list<Loan>(`/user-loans/${this.userUID}`);
        return this.database.list<Loan>(`/user-loans/${this.userUID}`).snapshotChanges().map(loans => {
            return loans.map(loan => {
                const data = loan.payload.val();
                data.uid = loan.key;
                return { ...data };
            });
          });
    }

    retrieveRecentsLoans(): Observable<Loan[]> {
        return this.database.list<Loan>(`/user-loans/${this.userUID}`).snapshotChanges().map(loans => {
            return loans.map(a => {
                const data = a.payload.val();
                data.uid = a.key;
                return { ...data };
            });
          });
    }

    markedAsReturned(loan: Loan) {
        this.loans.update(loan.uid, { returned: true });
        console.log('Returned');
    }
}
