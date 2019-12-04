import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './TeacherDashboard/first-page/first-page.component';
import { LoginComponent } from './authUser/login/login.component';
import {AuthService} from './Services/AuthentificationUser/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './TeacherDashboard/copmposants/profile/profile.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { TeacherActionComponent } from './TeacherDashboard/copmposants/teacher-action/teacher-action.component';
import { MyCategoriesComponent } from './TeacherDashboard/copmposants/my-categories/my-categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MydialogueComponent } from './TeacherDashboard/Dialogs/mydialogue/mydialogue.component';
import { ModialogueComponent } from './modialogue/modialogue.component';
import { AngularMaterialModule } from './angular-material.module';
import {MatDialogModule} from '@angular/material';
import { AreUSureComponent } from './TeacherDashboard/Dialogs/are-usure/are-usure.component';
import { TeacherFilesComponent } from './TeacherDashboard/copmposants/teacher-files/teacher-files.component';
import { ViewDetailFileComponent } from './TeacherDashboard/Dialogs/view-detail-file/view-detail-file.component';
import { SkillsComponent } from './TeacherDashboard/copmposants/skills/skills.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { StatistiquesTeacherComponent } from './TeacherDashboard/copmposants/statistiques-teacher/statistiques-teacher.component';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    LoginComponent,
    ProfileComponent,
    TeacherActionComponent,
    MyCategoriesComponent,
    MydialogueComponent,
    ModialogueComponent,
    AreUSureComponent,
    TeacherFilesComponent,
    ViewDetailFileComponent,
    SkillsComponent,
    StatistiquesTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatDialogModule,
    NgxChartsModule,
    ChartsModule
  ],
  entryComponents: [
    MydialogueComponent, ViewDetailFileComponent, AreUSureComponent
  ],

  providers: [AuthService, HttpClient],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

}
