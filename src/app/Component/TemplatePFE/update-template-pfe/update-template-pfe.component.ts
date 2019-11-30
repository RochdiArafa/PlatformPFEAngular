import { Component, OnInit } from '@angular/core';
import { TemplatePFE } from 'src/app/Model/template-pfe';
import { TemplatePFEService } from 'src/app/Service/TemplatePFEService/template-pfe.service';
import { GradProjectFile } from 'src/app/Model/grad-project-file';

@Component({
  selector: 'app-update-template-pfe',
  templateUrl: './update-template-pfe.component.html',
  styleUrls: ['./update-template-pfe.component.scss']
})
export class UpdateTemplatePFEComponent implements OnInit {

  public templatePFE: TemplatePFE ;
  constructor(public templatePFEService:TemplatePFEService) { 
    this.templatePFE = new TemplatePFE();
    this.GetTemplatePFE(16);
  }

  ngOnInit() {
    
  }


  updateTemplatePFE(){
    var ch = this.templatePFE.template;
    for (let index = 0; index < ch.length; index++) {
      ch = ch.replace("&nbsp;"," ")    
    }
    this.templatePFE.template = ch;
    
    this.templatePFEService.modifier(this.templatePFE).subscribe((data: any)=>{
      console.log(data);
    }) 
  }

  
  GetTemplatePFE(id : number){

    this.templatePFEService.search(id).subscribe((data: any)=>{
      console.log(data);
      this.templatePFE =  data;
      this.templatePFE.site = data.site.id;
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
