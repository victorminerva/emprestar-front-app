import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoansComponent } from './home/loans/loans.component';
import { NewLoanComponent } from './home/new-loan/new-loan.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'loan', component: NewLoanComponent}
];
