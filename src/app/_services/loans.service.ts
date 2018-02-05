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
    recents: Observable<Loan[]>;

    constructor(private database: AngularFireDatabase, private firebaseAuth: AngularFireAuth) {
        this.userUID = firebaseAuth.auth.currentUser.uid;
        console.log(this.userUID);
    }

    retrieveAllUserLoans(): Observable<Loan[]> {
        return this.database.list<Loan>(`/user-loans/${this.userUID}`).valueChanges();
    }

    retrieveRecentsLoans(): Observable<Loan[]> {
        return this.database.list<Loan>(`/user-loans/${this.userUID}`).valueChanges()
                .map(items => items.sort((a, b) => b.dateInclusion - a.dateInclusion)) as Observable<Loan[]>;

    }
}
