import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstPageComponent} from './TeacherDashboard/first-page/first-page.component';
import {LoginComponent} from './authUser/login/login.component';
import {ControlIsTeacherService} from './Services/AuthentificationUser/control-is-teacher.service';
import {ProfileComponent} from './TeacherDashboard/copmposants/profile/profile.component';


import { TemplatePFEComponent } from './Component/TemplatePFE/template-pfe/template-pfe.component';
import { NotFoundComponent } from './Component/NotFound/not-found/not-found.component';
import { TemplateIntershipAgreementComponent } from './Component/TemplateIntershipAgreement/template-intership-agreement/template-intership-agreement.component';
import { AddTemplatePFEComponent } from './Component/TemplatePFE/add-template-pfe/add-template-pfe.component';
import { UpdateTemplatePFEComponent } from './Component/TemplatePFE/update-template-pfe/update-template-pfe.component';
import { ExportTemplatePFEComponent } from './Component/TemplatePFE/export-template-pfe/export-template-pfe.component';
import { ExportDataFichePFEComponent } from './Component/TemplatePFE/export-data-fiche-pfe/export-data-fiche-pfe.component';
import { StatistiqueComponent } from './Component/Dashboard/InternshipDirector/statistique/statistique.component';
import {ProfilDirecteurComponent} from './Directeurdesstage/profil-directeur/profil-directeur.component';
import {ControlIsDirecteurService} from './Services/AuthentificationUser/control-is-directeur.service';
import {CalendarComponent} from './Admin/calendar/calendar.component';
import {ProfilAdminComponent} from './Admin/profil-admin/profil-admin.component';
import {ControleIsadminService} from './Services/AuthentificationUser/controle-isadmin.service';
import {DepartmentComponent} from './Admin/department/department.component';
import {EcoleComponent} from './Admin/ecole/ecole.component';
import {SitessitComponent} from './Admin/sitessit/sitessit.component';

const routes: Routes = [
  {path: 'ProfileTeacher', component: FirstPageComponent,  canActivate: [ControlIsTeacherService]},
  {path: 'Login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profildirecteur', component: ProfilDirecteurComponent,  canActivate: [ControlIsDirecteurService] },
  {path: 'calendar', component: CalendarComponent },
  {path: 'profileadmin', component: ProfilAdminComponent,   canActivate: [ControleIsadminService]  },
  {path: 'departments', component: DepartmentComponent },
  {path: 'ecole', component: EcoleComponent },
  {path: 'sites', component: SitessitComponent },
  {
    path        : 'InternshipDirector/TemplatePFE',
    component: TemplatePFEComponent
  },
  {
    path        : 'InternshipDirector/TemplatePFE/add',
    component: AddTemplatePFEComponent
  },
  {
    path        : 'InternshipDirector/TemplatePFE/update',
    component: UpdateTemplatePFEComponent
  },
  {
    path        : 'InternshipDirector/TemplatePFE/export',
    component: ExportTemplatePFEComponent
  },
  {
    path        : 'InternshipDirector/TemplatePFE/exportPFEfile',
    component: ExportDataFichePFEComponent
  },
  {
    path        : 'InternshipDirector/TemplateIntershipAgreement',
    component: TemplateIntershipAgreementComponent
  },
  {
    path        : 'InternshipDirector/Statistique',
    component: StatistiqueComponent
  },
  {
      path      : '**',
      component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
