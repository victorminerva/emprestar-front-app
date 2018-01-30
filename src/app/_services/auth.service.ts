import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { User } from '@firebase/auth-types';
import { NavigationEnd } from '@angular/router';

import 'rxjs/add/operator/filter';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
  }

  isLoggedIn() {
    return this.user !== undefined;
  }

  loginWithGoogle(): any {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return this.firebaseAuth
            .auth
            .signInWithPopup(googleProvider);
  }

  loginWithFacebook(): any {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    return this.firebaseAuth
            .auth
            .signInWithPopup(facebookProvider);
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut().then(() => {
        this.router.navigate(['/login']);
      })
      .catch(err => {
        console.log('[logout] - Something went wrong:', err.message);
      });
  }
}
