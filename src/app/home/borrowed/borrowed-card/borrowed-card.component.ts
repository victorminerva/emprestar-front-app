import { Component, OnInit } from '@angular/core';
import { Loan } from '../../../_models/loan.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-borrowed-card',
  templateUrl: './borrowed-card.component.html',
  styleUrls: ['./borrowed-card.component.css']
})
export class BorrowedCardComponent implements OnInit {

  @Input() loan: Loan;

  constructor() { }

  ngOnInit() {
  }

  loanIsDelayed(): boolean {
    const currentDate = new Date();
    return this.loan.untilWhen < currentDate.getTime;
  }

}
