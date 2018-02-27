import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-loan',
  templateUrl: './new-loan.component.html',
  styleUrls: ['./new-loan.component.css']
})
export class NewLoanComponent implements OnInit {

  step = 0;

  things = [
    {value: '0', viewValue: 'Dinheiro'},
    {value: '1', viewValue: 'Jogo'},
    {value: '2', viewValue: 'Livro'},
    {value: '3', viewValue: 'Utensilios'},
    {value: '4', viewValue: 'Outros'}
  ];

  constructor() { }

  ngOnInit() {
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

}
