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
  infoDetailHidden = true;

  constructor() { }

  ngOnInit() {
  }

  loanIsDelayed(): boolean {
    const currentDate = new Date();
    const date = new Date(this.loan.untilWhen['time']);
    return date.getTime() < currentDate.getTime();
  }

  showOrHideInfoDetail() {
    if (this.infoDetailHidden) {
      console.log('false');
      this.infoDetailHidden = false;
    } else {
      console.log('true');
      this.infoDetailHidden = true;
    }
  }
}
