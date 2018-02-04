import { Injectable } from '@angular/core';
import { Loan } from '../_models/loan.model';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class LoansService {

    constructor(private db: AngularFireDatabase) {}

    retrieveAllLoans() {
        return this.db.list<Loan>('/loans').valueChanges();
    }
}
