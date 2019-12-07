import { Component, OnInit } from '@angular/core';
import { TemplatePFEService } from 'src/app/Services/TemplatePFEService/template-pfe.service';
import { TemplatePFE } from 'src/app/Models/template-pfe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-pfe',
  templateUrl: './template-pfe.component.html',
  styleUrls: ['./template-pfe.component.scss']
})
export class TemplatePFEComponent implements OnInit {
  templatePFE : TemplatePFE;
  showAddTemplate : boolean;
  showUpdateTemplate : boolean;
  template : TemplatePFE = new TemplatePFE()
  constructor(public templatePFEService:TemplatePFEService , public router:Router ) { 
    if(this.template == null){
      this.showAddTemplate = true;
      this.showUpdateTemplate = false;
    }  
    else{
      this.showAddTemplate = false;
      this.showUpdateTemplate = true;
    }
  }

  ngOnInit() {
  }

  GetTemplatePFE(id : number){

      this.templatePFEService.search(id).subscribe((data: any)=>{
        console.log(data);
        this.templatePFE = data;
      })
  
  }

  deleteTemplatePFE(id:number){
    this.templatePFEService.delete(id).subscribe((data: any)=>{
      console.log(data);
    }) 
  }

  addTemplatePFE(){
    this.templatePFE = new TemplatePFE();
    this.templatePFE.template = "angular";
    this.templatePFE.site= 1;
    this.templatePFEService.ajouter(this.templatePFE).subscribe((data: any)=>{
      console.log(data);
    }) 
  }

  updateTemplatePFE(){
    this.templatePFE = new TemplatePFE();
    this.templatePFE.id=16;
    this.templatePFE.template = "angular updated";
    this.templatePFE.site= 1;
    this.templatePFEService.modifier(this.templatePFE).subscribe((data: any)=>{
      console.log(data);
    }) 
  }


}
