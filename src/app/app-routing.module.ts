import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplatePFEComponent } from './Component/TemplatePFE/template-pfe/template-pfe.component';
import { NotFoundComponent } from './Component/NotFound/not-found/not-found.component';
import { TemplateIntershipAgreementComponent } from './Component/TemplateIntershipAgreement/template-intership-agreement/template-intership-agreement.component';
import { AddTemplatePFEComponent } from './Component/TemplatePFE/add-template-pfe/add-template-pfe.component';
import { UpdateTemplatePFEComponent } from './Component/TemplatePFE/update-template-pfe/update-template-pfe.component';

const routes: Routes = [
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
    path        : 'InternshipDirector/TemplateIntershipAgreement',
    component: TemplateIntershipAgreementComponent
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
