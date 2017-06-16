import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service'

import { AppComponent } from './app.component';
import { MembersComponent } from './components/members/members.component';
import { MemberDetailComponent } from './components/member-detail/member-detail.component';
import { AboutComponent } from './components/about/about.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { EditMemberComponent } from './components/edit-member/edit-member.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { FilterPipe } from './filter.pipe';

const appRoutes: Routes = [
  {path: '', component: MembersComponent},
  {path: 'members/:id', component: MemberDetailComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/add-member', component: AddMemberComponent},
  {path: 'admin/edit/members/:id', component: EditMemberComponent},
  {path: 'about', component: AboutComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberDetailComponent,
    AboutComponent,
    AddMemberComponent,
    EditMemberComponent,
    NavbarComponent,
    HomeComponent,
    AdminComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
