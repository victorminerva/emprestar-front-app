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

    authState: Observable<firebase.User>;
    uidUser: string;

    constructor(private db: AngularFireDatabase, private firebaseAuth: AngularFireAuth) {
        this.authState = firebaseAuth.authState;
    }

    retrieveAllLoans() {
        this.authState.subscribe(auth => {
            this.uidUser = auth.uid;
        });
        return this.db.list<Loan>('/loans').valueChanges();
    }
}
