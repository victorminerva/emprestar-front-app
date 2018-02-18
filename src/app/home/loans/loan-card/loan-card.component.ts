import { Component, OnInit, Output } from '@angular/core';
import { Loan } from '../../../_models/loan.model';
import { Input } from '@angular/core';
import { LoansService } from '../../../_services/loans.service';

@Component({
  selector: 'app-loan-card',
  templateUrl: './loan-card.component.html',
  styleUrls: ['./loan-card.component.css']
})
export class LoanCardComponent implements OnInit {

  @Input() loan: Loan;
  infoDetailHidden: boolean;
  confirmReturnedDialogHidden: boolean;

  constructor(private loansService: LoansService) { }

  ngOnInit() {
    this.infoDetailHidden = true;
    this.confirmReturnedDialogHidden = true;
  }

  loanIsDelayed(): boolean {
    const currentDate = new Date();
    const date = new Date(this.loan.untilWhen['time']);
    return date.getTime() < currentDate.getTime();
  }

  showOrHideInfoDetail() {
    if (this.infoDetailHidden) {
      this.infoDetailHidden = false;
    } else {
      this.infoDetailHidden = true;
    }
  }

  showConfirmReturned() {
    if (this.confirmReturnedDialogHidden) {
      this.confirmReturnedDialogHidden = false;
    } else {
      this.confirmReturnedDialogHidden = true;
    }
  }

  markedAsReturned() {
    this.loansService.markedAsReturned(this.loan);
    this.confirmReturnedDialogHidden = true;
  }
}
