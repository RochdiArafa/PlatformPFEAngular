import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';

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
import { StatistiquesTeacherComponent } from './TeacherDashboard/copmposants/statistiques-teachers/statistiques-teachers.component';
import {ChartsModule} from 'ng2-charts';
import { DirectorpageComponent } from './DirectorDashboard/directorpage/directorpage.component';
import { StudentsWithoutFileComponent } from './DirectorDashboard/students-without-file/students-without-file.component';
import { StudentListComponent } from './DirectorDashboard/student-list/student-list.component';
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
import { ListGradfileComponent } from './DirectorDashboard/list-gradfile/list-gradfile.component';
import { StatpageComponent } from './DirectorDashboard/statpage/statpage.component';
import { NotifierModule, NotifierOptions } from 'angular-notifier';


import {FullCalendarModule} from '@fullcalendar/angular';



import { ProfilDirecteurComponent } from './Directeurdesstage/profil-directeur/profil-directeur.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CalendarComponent } from './Admin/calendar/calendar.component';
import { ProfilAdminComponent } from './Admin/profil-admin/profil-admin.component';
import { EcoleComponent } from './Admin/ecole/ecole.component';
import { DepartmentComponent } from './Admin/department/department.component';
import { SitessitComponent } from './Admin/sitessit/sitessit.component';
import { OptionnComponent } from './Admin/optionn/optionn.component';
import { ClassesComponent } from './Admin/classes/classes.component';
import { ChefdepComponent } from './Admin/chefdep/chefdep.component';
import { DirecteurComponent } from './Admin/directeur/directeur.component';
import { EnseignantComponent } from './Admin/enseignant/enseignant.component';
import { GesStudentComponent } from './Admin/ges-student/ges-student.component';
import { DashboardChefComponent } from './ChefDepartementt/composant/dashboard-chef/dashboard-chef.component';
import { CategoriesComponent } from './ChefDepartementt/composant/categories/categories.component';
import { EspacefichesComponent } from './ChefDepartementt/composant/espacefiches/espacefiches.component';
import { OldpfeComponent } from './ChefDepartementt/composant/oldpfe/oldpfe.component';
import { StudentsConfigComponent } from './ChefDepartementt/composant/students-config/students-config.component';
import { TeachersencadrementComponent } from './ChefDepartementt/composant/teachersencadrement/teachersencadrement.component';
import { TraitementrecComponent } from './ChefDepartementt/composant/traitementrec/traitementrec.component';
import { ConfirmationComponent } from './Dialogs/confirmation/confirmation.component';
import { Details2configComponent } from './Dialogs/details2config/details2config.component';
import { DetailsconfigComponent } from './Dialogs/detailsconfig/detailsconfig.component';
import { DetailsdialogComponent } from './Dialogs/detailsdialog/detailsdialog.component';
import { Details2dialogComponent } from './Dialogs/details2dialog/details2dialog.component';
import { PrevalidateurComponent } from './Dialogs/prevalidateur/prevalidateur.component';
import { TraitementdialogComponent } from './Dialogs/traitementdialog/traitementdialog.component';
import { ReclamationComponent } from './Student/composant/reclamation/reclamation.component';

import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { CalendarteacherComponent } from './Admin/calendarteacher/calendarteacher.component';

import { AddPreferdCategoriesComponent } from './TeacherDashboard/Dialogs/add-preferd-categories/add-preferd-categories.component';
import { AddSkillsComponent } from './TeacherDashboard/Dialogs/add-skills/add-skills.component';


/*
const appRoutes: Routes = [
  {
      path        : 'apps',
      loadChildren: './main/apps/apps.module#AppsModule'
  }
]
*/
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
    StatistiquesTeacherComponent,
    DirectorpageComponent,
    StudentsWithoutFileComponent,
    StudentListComponent,
    ListGradfileComponent,
    StatpageComponent,
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
    DashboardInternshipDirectorComponent,
    SkillsComponent,
    StatistiquesTeacherComponent,
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
    StatistiquesTeacherComponent,

    ProfilDirecteurComponent,
    CalendarComponent,
    ProfilAdminComponent,
    EcoleComponent,
    DepartmentComponent,
    SitessitComponent,
    OptionnComponent,
    ClassesComponent,
    ChefdepComponent,
    DirecteurComponent,
    EnseignantComponent,
    GesStudentComponent,
    DashboardChefComponent,
    CategoriesComponent,
    EspacefichesComponent,
    OldpfeComponent,
    StudentsConfigComponent,
    TeachersencadrementComponent,
    TraitementrecComponent,
    ConfirmationComponent,
    Details2configComponent,
    DetailsconfigComponent,
    DetailsdialogComponent,
    Details2dialogComponent,
    PrevalidateurComponent,
    TraitementdialogComponent,
    ReclamationComponent,

    CalendarteacherComponent,




    AddPreferdCategoriesComponent,
    AddSkillsComponent

  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatDialogModule,
    NgxChartsModule,
    ChartsModule,
    NotifierModule.withConfig({
      position: {
    horizontal: {
      position: 'middle',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 10,
      gap: 30
    }
  }
}),
    ModalModule.forRoot(),
    FullCalendarModule,
    NgxPaginationModule
  ],
  entryComponents: [
    MydialogueComponent, ViewDetailFileComponent, AreUSureComponent, ConfirmationComponent, DetailsdialogComponent, Details2dialogComponent, PrevalidateurComponent, TraitementdialogComponent,
    MydialogueComponent, ViewDetailFileComponent, AreUSureComponent, AddPreferdCategoriesComponent, AddSkillsComponent
  ],

  providers: [AuthService, HttpClient],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {

}
