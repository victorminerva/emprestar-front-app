import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoansComponent } from './home/loans/loans.component';
import { BorrowedComponent } from './home/borrowed/borrowed.component';
import { LoanCardComponent } from './home/loans/loan-card/loan-card.component';
import { LoansService } from './_services/loans.service';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { BorrowedService } from './_services/borrowed.service';
import { HeaderComponent } from './header/header.component';
import { BorrowedCardComponent } from './home/borrowed/borrowed-card/borrowed-card.component';
import { AutofocusDirective } from './header/autofocus.directive';
import { NewLoanComponent } from './home/new-loan/new-loan.component';

import { MatExpansionModule, MatAccordion, MatDatepickerModule, MatButtonModule, MatIconModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MAT_DATE_LOCALE,
  MatSelectModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LoansComponent,
    BorrowedComponent,
    LoanCardComponent,
    HeaderComponent,
    BorrowedCardComponent,
    NewLoanComponent,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AngularFireDatabase, AuthService,
              LoansService, BorrowedService,
              {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
