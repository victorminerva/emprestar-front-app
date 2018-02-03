import { Component, OnInit } from '@angular/core';
import { Loan } from '../../../_models/loan.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-loan-card',
  templateUrl: './loan-card.component.html',
  styleUrls: ['./loan-card.component.css']
})
export class LoanCardComponent implements OnInit {

  @Input() loan: Loan;

  constructor() { }

  ngOnInit() {
  }

}
