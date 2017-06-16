import { Component, OnInit } from '@angular/core';
import { Member } from '../../member.model';
import { FirebaseService } from '../../services/firebase.service';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.sass']
})
export class MemberDetailComponent implements OnInit {
  memberId: any;
  memberToDisplay: Member;
  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.memberId = this.route.snapshot.params['id'];
    this.firebaseService.getMemberById(this.memberId).subscribe( member => {
      this.memberToDisplay = member;
    console.log(this.memberId);  
    })
  }

}
