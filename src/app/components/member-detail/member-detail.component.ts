import { Component, OnInit } from '@angular/core';
import { Member } from '../../member.model';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.sass']
})
export class MemberDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
