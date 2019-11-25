import { Component, OnInit, ElementRef } from '@angular/core';
import { TemplatePFE } from 'src/app/Model/template-pfe';
import { TemplatePFEService } from 'src/app/Service/TemplatePFEService/template-pfe.service';

import * as jspdf from 'jspdf';  
  
import html2canvas from 'html2canvas'; 
import { Student } from 'src/app/Model/student';

@Component({
  selector: 'app-export-template-pfe',
  templateUrl: './export-template-pfe.component.html',
  styleUrls: ['./export-template-pfe.component.scss']
})
export class ExportTemplatePFEComponent implements OnInit {
  public templatePFE: TemplatePFE = new TemplatePFE();
  public template: string;

  public templateblank: string = "";
  public templateNotblank: string = "";

  public student : Student = new Student();

  content: ElementRef;

  constructor(public templatePFEService:TemplatePFEService) { 
    this.templatePFE = new TemplatePFE();
    this.GetTemplatePFE(16);
    
  }

  ngOnInit() {
  }

  GetTemplatePFE(id : number){

    this.templatePFEService.search(id).subscribe((data: any)=>{
      console.log(data);
      this.templatePFE =  data;
      this.templatePFE.site = data.site.id;
      this.template = this.templatePFE.template;
      //this.ExportBlankTemplate();
      this.ExportStudentTemplate();
    })

  }

  ExportBlankTemplate(){
    
    this.templateblank =  this.templatePFE.template.replace("{{student.nom}}", "");
    this.templateblank =  this.templateblank.replace("{{student.prenom}}", "");
    this.templateblank =  this.templateblank.replace("{{gradprojectFile.datedebut}}", "");
    this.templateblank =  this.templateblank.replace("{{gradprojectFile.datefin}}", "");
    
    console.log(this.templateblank);
    this.template = this.templateblank;
    //this.ExportTemplate();
  }

  ExportStudentTemplate(){
    this.templateNotblank =  this.templatePFE.template.replace("{{student.nom}}", "arafa");
    this.templateNotblank =  this.templateNotblank.replace("{{student.prenom}}", "rochdi");
    this.templateNotblank =  this.templateNotblank.replace("{{gradprojectFile.datedebut}}", "02-12-2019");
    this.templateNotblank =  this.templateNotblank.replace("{{gradprojectFile.datefin}}", "04-2-2020");
    console.log(this.templateNotblank);
    this.template = this.templateNotblank;
    //this.ExportTemplate();
  }


  ExportTemplate(){
    /*
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    }); 

    */

   let doc = new jspdf();
   doc.addHTML(this.content.nativeElement, function() {
      doc.save("obrz.pdf");
   });
  }

}
