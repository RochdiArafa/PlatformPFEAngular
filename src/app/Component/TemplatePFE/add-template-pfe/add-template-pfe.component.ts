import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TemplatePFE } from 'src/app/Models/template-pfe';
import { TemplatePFEService } from 'src/app/Services/TemplatePFEService/template-pfe.service';

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

  copyMessage(val: string){
    if(val == "titre")
      val = "{{gradProjectFile.titre}}";
    if(val == "description")
      val = "{{gradProjectFile.description}}";
    if(val == "problem")
      val = "{{gradProjectFile.problem}}";
    if(val == "functionnalities")
      val = "{{gradProjectFile.functionnalities}}";
      
      
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
