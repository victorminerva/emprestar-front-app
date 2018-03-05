import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Favored } from '../_models/favored.model';

@Injectable()
export class FavoredService {

  userUID = '';
  userFavoredsEndPoint: any;

  constructor(private database: AngularFireDatabase, private firebaseAuth: AngularFireAuth) {
    this.userUID = firebaseAuth.auth.currentUser.uid;
  }

  retrieveAllUserFavoreds(): Observable<Favored[]> {
    this.userFavoredsEndPoint = this.database.list<Favored>(`/user-favoreds/${this.userUID}`);
    return this.database.list<Favored>(`/user-favoreds/${this.userUID}`).snapshotChanges().map(favoreds => {
      return favoreds.map(favored => {
          const data = favored.payload.val();
          data.uid = favored.key;
          return { ...data };
      });
    });
  }

}
