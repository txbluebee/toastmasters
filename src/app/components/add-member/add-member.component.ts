import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.sass']
})
export class AddMemberComponent implements OnInit {
  name: string;
  role: string;
  email: string;
  imageUrl: string;
  city: string;
  state: string;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let member = {
      name: this.name,
      role: this.role,
      email: this.email,
      imageUrl: this.imageUrl,
      city: this.city,
      state: this.state
    }
    this.firebaseService.addMember(member);
    this.router.navigate(['/admin']);
  }

}
