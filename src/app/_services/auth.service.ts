import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  loginWithGoogle() {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    this.firebaseAuth
      .auth
      .signInWithPopup(googleProvider)
      .then(result => {
        console.log('User: ', JSON.stringify(result.user));
      })
      .catch(err => {
        console.log('[loginWithGoogle] - Something went wrong:', err.message);
      });
  }

  loginWithFacebook() {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();

    this.firebaseAuth
      .auth
      .signInWithPopup(facebookProvider)
      .then(result => {
        console.log('User: ', JSON.stringify(result.user));
        console.log('Provider Data: ', JSON.stringify(result.user.providerData));
      })
      .catch(err => {
        console.log('[loginWithFacebook] - Something went wrong:', err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut().then(() => {
        console.log('Signed Out');
        console.log('User', this.firebaseAuth.auth.currentUser);
      })
      .catch(err => {
        console.log('[logout] - Something went wrong:', err.message);
      });
  }
}
