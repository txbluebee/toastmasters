import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  members: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.members = this.database.list('/members')
  }

  getMembers() {
    return this.members;
  }

  getMemberById(id) {
    return this.database.object('/members/' + id);
  }

  addMember(member){
    this.members.push(member);
  }

}
