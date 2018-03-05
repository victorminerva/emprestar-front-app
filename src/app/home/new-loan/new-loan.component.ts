import { Component, OnInit } from '@angular/core';
import { FavoredService } from '../../_services/favored.service';
import { Favored } from '../../_models/favored.model';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../_services/auth.service';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { LoansService } from '../../_services/loans.service';
import { Loan } from '../../_models/loan.model';
import { DatePipe } from '@angular/common';
import { ServerValue } from '@firebase/database';
import { DateApp } from '../../_models/date.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-loan',
  templateUrl: './new-loan.component.html',
  styleUrls: ['./new-loan.component.css']
})
export class NewLoanComponent implements OnInit {

  step = 0;
  phTitleWhat = '';
  phNameFavored = '';
  showListFavoreds: boolean;
  userFavoreds: Observable<Favored[]>;

  favored: Favored;
  what: any;
  whatDesc: any;
  untilWhen: any;


  things = [
    {value: '0', viewValue: 'Dinheiro'},
    {value: '1', viewValue: 'Jogo'},
    {value: '2', viewValue: 'Livro'},
    {value: '3', viewValue: 'Utensilios'},
    {value: '4', viewValue: 'Outros'}
  ];

  constructor(private authService: AuthService, private favoredService: FavoredService,
              private loanService: LoansService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.showListFavoreds = false;
    this.whatDesc = '';
    this.favored = new Favored();
    this.favored.name = 'Selecione o favorecido';
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  confirmLoan() {
    const loan = new Loan();
    loan.dateInclusion = new DateApp();
    loan.what = this.what.viewValue;
    loan.favored = this.favored;
    loan.untilWhen = new DateApp().setDate(this.untilWhen);
    loan.returned = false;
    loan.whatDescription = this.whatDesc;
    this.loanService.registerNewLoan(loan);

    this.router.navigate(['/home']);
  }

  selectFavored() {
    this.showListFavoreds = true;
    this.userFavoreds = this.favoredService.retrieveAllUserFavoreds();
  }

  favoredSelected(favored: Favored) {
    this.favored = new Favored();
    this.favored.uid = favored.uid;
    this.favored.name = favored.name;
    this.favored.email = favored.email;
    this.favored.phone = favored.phone;
    this.showListFavoreds = false;
  }

  close() {
    this.showListFavoreds = false;
  }

  thingSelected(thing: any) {
    this.what = thing;
    switch (thing.value) {
      case '0':
        this.phTitleWhat = 'Valor';
        break;
      case '1':
        this.phTitleWhat = 'Nome do Jogo';
        break;
      case '2':
        this.phTitleWhat = 'Título do livro';
        break;
      case '3':
        this.phTitleWhat = 'Qual utensílio?';
        break;
      case '4':
        this.phTitleWhat = 'O que?';
        break;
    }
  }
}
