import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Favored } from '../_models/favored.model';

@Injectable()
export class FavoredService {

  userUID = '';

  constructor(private database: AngularFireDatabase, private firebaseAuth: AngularFireAuth) {
    this.userUID = firebaseAuth.auth.currentUser.uid;
  }

  retrieveAllUserFavoreds(): Observable<Favored[]> {
    return this.database.list<Favored>(`/user-favoreds/${this.userUID}`).valueChanges();
  }

}
