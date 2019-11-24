import { Component, OnInit } from '@angular/core';
import { TemplatePFEService } from 'src/app/Service/TemplatePFEService/template-pfe.service';
import { TemplatePFE } from 'src/app/Model/template-pfe';

@Component({
  selector: 'app-template-pfe',
  templateUrl: './template-pfe.component.html',
  styleUrls: ['./template-pfe.component.scss']
})
export class TemplatePFEComponent implements OnInit {
  templatePFE : TemplatePFE;
  constructor(public templatePFEService:TemplatePFEService ) { 
    
    //this.deleteTemplatePFE(10);
    //this.GetTemplatePFE(10);
    //this.addTemplatePFE();
    this.updateTemplatePFE();
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
