import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TemplatePFEComponent } from './Component/TemplatePFE/template-pfe/template-pfe.component';
import { NotFoundComponent } from './Component/NotFound/not-found/not-found.component';
import { TemplateIntershipAgreementComponent } from './Component/TemplateIntershipAgreement/template-intership-agreement/template-intership-agreement.component';
import { StudentComponent } from './Component/Student/student/student.component';
import { AddTemplatePFEComponent } from './Component/TemplatePFE/add-template-pfe/add-template-pfe.component';
import { UpdateTemplatePFEComponent } from './Component/TemplatePFE/update-template-pfe/update-template-pfe.component';
import { ExportTemplatePFEComponent } from './Component/TemplatePFE/export-template-pfe/export-template-pfe.component';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExportDataFichePFEComponent } from './Component/TemplatePFE/export-data-fiche-pfe/export-data-fiche-pfe.component';



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
    StudentComponent,
    AddTemplatePFEComponent,
    UpdateTemplatePFEComponent,
    ExportTemplatePFEComponent,
    ExportDataFichePFEComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PDFExportModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
