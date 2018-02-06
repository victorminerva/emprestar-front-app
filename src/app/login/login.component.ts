import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private firebaseAuth: AngularFireAuth) {}

  ngOnInit() {
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle()
      .then(result => {
        this.onLoginSuccess();
        console.log('[loginWithGoogle] - Success');
      })
      .catch(err => {
        console.log('[loginWithGoogle] - Something went wrong:', err.message);
      });
  }

  loginWithFacebook() {
    this.authService.loginWithFacebook()
      .then(result => {
        this.onLoginSuccess();
        console.log('[loginWithFacebook] - Success');
      })
      .catch(err => {
        console.log('[loginWithFacebook] - Something went wrong:', err.message);
      });
  }

  onLoginSuccess() {
    this.router.navigate(['/home']);
  }
}
