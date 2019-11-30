import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { ExportDataFichePFEComponent } from './Component/TemplatePFE/export-data-fiche-pfe/export-data-fiche-pfe.component';
import { StatistiqueComponent } from './Component/Dashboard/InternshipDirector/statistique/statistique.component';
import { AddTemplateIntershipAgreementComponent } from './Component/TemplateIntershipAgreement/add-template-intership-agreement/add-template-intership-agreement.component';
import { UpdateTemplateIntershipAgreementComponent } from './Component/TemplateIntershipAgreement/update-template-intership-agreement/update-template-intership-agreement.component';
import { ExportTemplateFicheComponent } from './Component/TemplateIntershipAgreement/export-template-fiche/export-template-fiche.component';
import { ExportDataFicheComponent } from './Component/TemplateIntershipAgreement/export-data-fiche/export-data-fiche.component';



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
    ExportDataFichePFEComponent,
    StatistiqueComponent,
    AddTemplateIntershipAgreementComponent,
    UpdateTemplateIntershipAgreementComponent,
    ExportTemplateFicheComponent,
    ExportDataFicheComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    PDFExportModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
