import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.sass']
})
export class MembersComponent implements OnInit {
  members;
  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.members = this.firebaseService.getMembers();
  }

}
