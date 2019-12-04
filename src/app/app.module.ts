import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstPageComponent } from './TeacherDashboard/first-page/first-page.component';
import { LoginComponent } from './authUser/login/login.component';
import {AuthService} from './Services/AuthentificationUser/auth.service';
import {HttpClient} from '@angular/common/http';
import { ProfileComponent } from './TeacherDashboard/copmposants/profile/profile.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { TeacherActionComponent } from './TeacherDashboard/copmposants/teacher-action/teacher-action.component';
import { MyCategoriesComponent } from './TeacherDashboard/copmposants/my-categories/my-categories.component';
import { MydialogueComponent } from './TeacherDashboard/Dialogs/mydialogue/mydialogue.component';
import { ModialogueComponent } from './modialogue/modialogue.component';
import { AngularMaterialModule } from './angular-material.module';
import {MatDialogModule} from '@angular/material';
import { AreUSureComponent } from './TeacherDashboard/Dialogs/are-usure/are-usure.component';
import { TeacherFilesComponent } from './TeacherDashboard/copmposants/teacher-files/teacher-files.component';
import { ViewDetailFileComponent } from './TeacherDashboard/Dialogs/view-detail-file/view-detail-file.component';
import { TemplatePFEComponent } from './Component/TemplatePFE/template-pfe/template-pfe.component';
import { NotFoundComponent } from './Component/NotFound/not-found/not-found.component';
import { TemplateIntershipAgreementComponent } from './Component/TemplateIntershipAgreement/template-intership-agreement/template-intership-agreement.component';
import { StudentComponent } from './Component/Student/student/student.component';
import { AddTemplatePFEComponent } from './Component/TemplatePFE/add-template-pfe/add-template-pfe.component';
import { UpdateTemplatePFEComponent } from './Component/TemplatePFE/update-template-pfe/update-template-pfe.component';
import { ExportTemplatePFEComponent } from './Component/TemplatePFE/export-template-pfe/export-template-pfe.component';
import { ExportDataFichePFEComponent } from './Component/TemplatePFE/export-data-fiche-pfe/export-data-fiche-pfe.component';
import { StatistiqueComponent } from './Component/Dashboard/InternshipDirector/statistique/statistique.component';
import { AddTemplateIntershipAgreementComponent } from './Component/TemplateIntershipAgreement/add-template-intership-agreement/add-template-intership-agreement.component';
import { UpdateTemplateIntershipAgreementComponent } from './Component/TemplateIntershipAgreement/update-template-intership-agreement/update-template-intership-agreement.component';
import { ExportTemplateFicheComponent } from './Component/TemplateIntershipAgreement/export-template-fiche/export-template-fiche.component';
import { ExportDataFicheComponent } from './Component/TemplateIntershipAgreement/export-data-fiche/export-data-fiche.component';
import { DashboardInternshipDirectorComponent } from './Component/Dashboard/InternshipDirector/dashboard-internship-director/dashboard-internship-director.component';



const appRoutes: Routes = [
  {
      path        : 'apps',
      loadChildren: './main/apps/apps.module#AppsModule'
  }
]
  
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

    TemplatePFEComponent,
    MydialogueComponent, 
    ViewDetailFileComponent,
    NotFoundComponent,
    TemplateIntershipAgreementComponent,
    StudentComponent,
    AddTemplatePFEComponent,
    UpdateTemplatePFEComponent,
    ExportTemplatePFEComponent,
    ExportDataFichePFEComponent,
    StatistiqueComponent,
    AddTemplateIntershipAgreementComponent,
    UpdateTemplateIntershipAgreementComponent,
    ExportTemplateFicheComponent,
    ExportDataFicheComponent,
    DashboardInternshipDirectorComponent
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
    CKEditorModule,
    PDFExportModule
  ],
  entryComponents: [
  ],

  providers: [AuthService, HttpClient],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

}
