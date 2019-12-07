import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstPageComponent} from './TeacherDashboard/first-page/first-page.component';
import {LoginComponent} from './authUser/login/login.component';
import {ControlIsTeacherService} from './Services/AuthentificationUser/control-is-teacher.service';
import {ControlIsDirectorService} from './Services/AuthentificationUser/control-is-director.service';
import {ProfileComponent} from './TeacherDashboard/copmposants/profile/profile.component';
import { DirectorpageComponent } from './DirectorDashboard/directorpage/directorpage.component';

const routes: Routes = [
  {path: 'ProfileTeacher', component: FirstPageComponent,  canActivate: [ControlIsTeacherService]},
  {path: 'Login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'ProfileDirector', component: DirectorpageComponent,  canActivate: [ControlIsDirectorService]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
