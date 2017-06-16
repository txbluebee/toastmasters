import { Component, OnInit } from '@angular/core';
import { FirebaseService } from
 '../../services/firebase.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  members;
  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.members = this.firebaseService.getMembers();
  }

}
