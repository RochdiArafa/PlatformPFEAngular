import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TemplatePFE } from 'src/app/Model/template-pfe';
import { TemplatePFEService } from 'src/app/Service/TemplatePFEService/template-pfe.service';

@Component({
  selector: 'app-add-template-pfe',
  templateUrl: './add-template-pfe.component.html',
  styleUrls: ['./add-template-pfe.component.scss']
})
export class AddTemplatePFEComponent implements OnInit {

  public templatePFE: TemplatePFE ;
  constructor(public templatePFEService:TemplatePFEService) { 
    this.templatePFE = new TemplatePFE();
  }

  ngOnInit() {
  }

  addTemplatePFE(){
    var ch = this.templatePFE.template;
    for (let index = 0; index < ch.length; index++) {
      ch = ch.replace("&nbsp;"," ")    
    }
    this.templatePFE.template = ch;

    this.templatePFE.site= 1;
    this.templatePFEService.ajouter(this.templatePFE).subscribe((data: any)=>{
      console.log(data);
    }) 
  }

}
