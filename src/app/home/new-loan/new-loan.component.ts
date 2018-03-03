import { Component, OnInit } from '@angular/core';
import { FavoredService } from '../../_services/favored.service';
import { Favored } from '../../_models/favored.model';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../_services/auth.service';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef } from '@angular/material';
import { FormGroup } from '@angular/forms';

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

  things = [
    {value: '0', viewValue: 'Dinheiro'},
    {value: '1', viewValue: 'Jogo'},
    {value: '2', viewValue: 'Livro'},
    {value: '3', viewValue: 'Utensilios'},
    {value: '4', viewValue: 'Outros'}
  ];

  constructor(private authService: AuthService, private favoredService: FavoredService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.showListFavoreds = false;
    this.phNameFavored = 'Selecione o favorecido';
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

  }

  selectFavored() {
    this.showListFavoreds = true;
    this.userFavoreds = this.favoredService.retrieveAllUserFavoreds();
  }

  favoredSelected(favored: Favored) {
    this.phNameFavored = favored.name;
    this.showListFavoreds = false;
  }

  close() {
    this.showListFavoreds = false;
  }

  thingSelected(thing: any) {
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
