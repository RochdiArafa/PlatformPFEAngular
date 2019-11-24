import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplatePFEComponent } from './Component/TemplatePFE/template-pfe/template-pfe.component';
import { NotFoundComponent } from './Component/NotFound/not-found/not-found.component';
import { TemplateIntershipAgreementComponent } from './Component/TemplateIntershipAgreement/template-intership-agreement/template-intership-agreement.component';

const routes: Routes = [
  {
    path        : 'InternshipDirector/TemplatePFE',
    component: TemplatePFEComponent
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
