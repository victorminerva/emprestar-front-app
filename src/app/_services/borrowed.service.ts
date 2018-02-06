import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Loan } from '../_models/loan.model';


@Injectable()
export class BorrowedService {

    userUID: string;

    constructor(private database: AngularFireDatabase, private firebaseAuth: AngularFireAuth){
        this.userUID = firebaseAuth.auth.currentUser.uid;
    }

    retrieveAllUserBorrowed(): Observable<Loan[]> {
        return this.database.list<Loan>(`/user-borrowed/${this.userUID}`).valueChanges();
    }
}
