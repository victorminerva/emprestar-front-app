import { BrowserModule } from '@angular/platform-browser';
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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LoansComponent,
    BorrowedComponent,
    LoanCardComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
