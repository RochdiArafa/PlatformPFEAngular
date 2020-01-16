import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstPageComponent} from './TeacherDashboard/first-page/first-page.component';
import {LoginComponent} from './authUser/login/login.component';
import {ControlIsTeacherService} from './Services/AuthentificationUser/control-is-teacher.service';
import {ControlIsDirectorService} from './Services/AuthentificationUser/control-is-director.service';
import {ProfileComponent} from './TeacherDashboard/copmposants/profile/profile.component';

import { DirectorpageComponent } from './DirectorDashboard/directorpage/directorpage.component';
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

import { DashboardInternshipDirectorComponent } from './Component/Dashboard/InternshipDirector/dashboard-internship-director/dashboard-internship-director.component';
import { StudentComponent } from './Component/Student/student/student.component';

import {DepartmentComponent} from './Admin/department/department.component';
import {EcoleComponent} from './Admin/ecole/ecole.component';
import {SitessitComponent} from './Admin/sitessit/sitessit.component';
import {OptionnComponent} from './Admin/optionn/optionn.component';
import {ClassesComponent} from './Admin/classes/classes.component';
import {ChefdepComponent} from './Admin/chefdep/chefdep.component';

import { ExportDataFicheComponent } from './Component/TemplateIntershipAgreement/export-data-fiche/export-data-fiche.component';


import {DirecteurComponent} from './Admin/directeur/directeur.component';
import {EnseignantComponent} from './Admin/enseignant/enseignant.component';
import {GesStudentComponent} from './Admin/ges-student/ges-student.component';

import {DashboardChefComponent} from './ChefDepartementt/composant/dashboard-chef/dashboard-chef.component';
import {ReclamationComponent} from './Student/composant/reclamation/reclamation.component';
import {CalendarteacherComponent} from './Admin/calendarteacher/calendarteacher.component';



const routes: Routes = [
  {path: 'ProfileTeacher', component: FirstPageComponent,  canActivate: [ControlIsTeacherService]},
  {path: 'Login', component: LoginComponent},
  {path: 'ProfileChef', component: DashboardChefComponent},
  {path: 'Reclamation', component: ReclamationComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'ProfileDirector', component: DirectorpageComponent,  canActivate: [ControlIsDirectorService]},
  {path: 'profildirecteur', component: ProfilDirecteurComponent,  canActivate: [ControlIsDirecteurService] },
  {path: 'calendar', component: CalendarComponent },
  {path: 'profileadmin', component: ProfilAdminComponent,   canActivate: [ControleIsadminService]  },
  {path: 'departments', component: DepartmentComponent, canActivate: [ControleIsadminService] },
  {path: 'ecole', component: EcoleComponent , canActivate: [ControleIsadminService]},
  {path: 'sites', component: SitessitComponent,  canActivate: [ControleIsadminService]  },
  {path: 'options', component: OptionnComponent, canActivate: [ControleIsadminService] },
  {path: 'classes', component: ClassesComponent, canActivate: [ControleIsadminService] },
  {path: 'chefdeps', component: ChefdepComponent, canActivate: [ControleIsadminService] },
  {path: 'directeurs', component: DirecteurComponent, canActivate: [ControleIsadminService] },
  {path: 'teachers', component: EnseignantComponent, canActivate: [ControleIsadminService] },
  {path: 'students', component: GesStudentComponent, canActivate: [ControleIsadminService] },
  {path: 'calendarteacher', component: CalendarteacherComponent },
  {
    path        : 'InternshipDirector/TemplatePFE',
    component: TemplatePFEComponent,
    canActivate: [ControlIsDirecteurService]
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
    path        : 'InternshipDirector/TemplatePFE/exportPFEfile/:id',
    component: ExportDataFichePFEComponent
    ,  canActivate: [ControlIsDirecteurService]
  },
  {
    path        : 'InternshipDirector/TemplateIntershipAgreement',
    component: TemplateIntershipAgreementComponent
    ,  canActivate: [ControlIsDirecteurService]
  },
  {
    path        : 'InternshipDirector/TemplateIntershipAgreement/exportfile/:id',
    component: ExportDataFicheComponent
    ,  canActivate: [ControlIsDirecteurService]
  },
  {
    path        : 'InternshipDirector/Statistique',
    component: StatistiqueComponent
  },
  {
    path        : 'InternshipDirector/Dashboard',
    component: DashboardInternshipDirectorComponent,
    canActivate: [ControlIsDirecteurService]
  },
  {
    path        : 'InternshipDirector/Etudiant',
    component: StudentComponent,
    canActivate: [ControlIsDirecteurService]
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
