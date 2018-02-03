import { Injectable } from '@angular/core';
import { Loan } from '../_models/loan.model';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { query } from '@angular/core/src/render3/instructions';

@Injectable()
export class LoansService {

    userLoansRef: string;

    constructor(private db: AngularFireDatabase) {
        this.userLoansRef = '/loans';
     }


    retrieveAllLoans() {

        let loans: Loan[] = [];

        let loan = new Loan();
        loan.what = 'Dinheiro';
        loan.whatDescription = 'R$ 100,00';

        loans.push(loan);

        let loan2 = new Loan();
        loan2.what = 'Livro';
        loan2.whatDescription = 'descricao do livro';

        loans.push(loan2);

        return loans;
    }
}
