import { Component, OnInit } from '@angular/core';
import { BorrowedService } from '../../_services/borrowed.service';
import { Observable } from 'rxjs/Observable';
import { Loan } from '../../_models/loan.model';

@Component({
  selector: 'app-borrowed',
  templateUrl: './borrowed.component.html',
  styleUrls: ['./borrowed.component.css']
})
export class BorrowedComponent implements OnInit {

  userBorrowed: Observable<Loan[]>;

  constructor(private borrowedService: BorrowedService) { }

  ngOnInit() {
    this.userBorrowed = this.borrowedService.retrieveAllUserBorrowed();
  }

}
