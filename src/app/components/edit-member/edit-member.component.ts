import { Component, OnInit } from '@angular/core';
import { Member } from '../../member.model';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.sass']
})
export class EditMemberComponent implements OnInit {
memberId: any;
memberToEdit: Member;
name: string;
role: string;
email: string;
imageUrl: string;
city: string;
state: string;


  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.memberId = this.route.snapshot.params['id'];
    this.firebaseService.getMemberById(this.memberId).subscribe( member => {
      this.name = member.name;
      this.role = member.role;
      this.email = member.email;
      this.imageUrl = member.imageUrl;
      this.city = member.city;
      this.state = member.state;
    })
  }

  onEditSubmit(){
    let updatedMemberInfo = {
      name: this.name,
      role: this.role,
      email: this.email,
      imageUrl: this.imageUrl,
      city: this.city,
      state: this.state
    }

    this.firebaseService.updateMember(this.memberId, updatedMemberInfo)
    this.router.navigate(['/admin']);
  }


}
