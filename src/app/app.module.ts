import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { TemplatePFEComponent } from './Component/TemplatePFE/template-pfe/template-pfe.component';
import { NotFoundComponent } from './Component/NotFound/not-found/not-found.component';
import { TemplateIntershipAgreementComponent } from './Component/TemplateIntershipAgreement/template-intership-agreement/template-intership-agreement.component';
import { StudentComponent } from './Component/Student/student/student.component';

const appRoutes: Routes = [
  {
      path        : 'apps',
      loadChildren: './main/apps/apps.module#AppsModule'
  }
]
  
@NgModule({
  declarations: [
    AppComponent,
    TemplatePFEComponent,
    NotFoundComponent,
    TemplateIntershipAgreementComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
