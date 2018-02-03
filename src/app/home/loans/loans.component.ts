import { Component, OnInit } from '@angular/core';
import { Loan } from '../../_models/loan.model';
import { LoansService } from '../../_services/loans.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {

  loans: Loan[] = [];

  constructor(private loansService: LoansService) { }

  ngOnInit() {
    this.loans = this.loansService.retrieveAllLoans();
  }
}
