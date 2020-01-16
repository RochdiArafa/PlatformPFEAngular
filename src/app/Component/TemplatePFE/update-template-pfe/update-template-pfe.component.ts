import { Component, OnInit } from '@angular/core';
import { TemplatePFE } from 'src/app/Models/template-pfe';
import { TemplatePFEService } from 'src/app/Services/TemplatePFEService/template-pfe.service';
import { GradProjectFile } from 'src/app/Models/grad-project-file';
import { DirecteurdesstageService } from 'src/app/Services/directeurdesstage.service';
import { Site } from 'src/app/Models/site';

@Component({
  selector: 'app-update-template-pfe',
  templateUrl: './update-template-pfe.component.html',
  styleUrls: ['./update-template-pfe.component.scss']
})
export class UpdateTemplatePFEComponent implements OnInit {

  public templatePFE: TemplatePFE ;
  showerrorTitre : boolean = false;
  showerrordescription : boolean = false;
  showerrorproblem : boolean = false;
  showerrorfunctionnalities : boolean = false;
  site : Site;
  constructor(public templatePFEService:TemplatePFEService , public directeurService : DirecteurdesstageService) { 
    this.templatePFE = new TemplatePFE();
    this.getSite(parseInt(sessionStorage.getItem('idUser')));
  }

  ngOnInit() {
    
  }


  updateTemplatePFE(){
    var error = 0;
    var ch  = this.templatePFE.template;
    if( ch.indexOf("{{gradProjectFile.titre}}")== -1 ){
      this.showerrorTitre = true;
      error++;
    }
    else
      this.showerrorTitre = false;  

    if( ch.indexOf("{{gradProjectFile.description}}")== -1 ){
      this.showerrordescription = true;
      error++;
    }
    else
      this.showerrordescription = false; 
      
    if( ch.indexOf("{{gradProjectFile.problem}}")== -1 ){
      this.showerrorproblem = true;
      error++
    }
    else
      this.showerrorproblem = false; 
      
    if( ch.indexOf("{{gradProjectFile.functionnalities}}")== -1 ){
      this.showerrorfunctionnalities = true;
      error++;
    }
    else
      this.showerrorfunctionnalities = false;   

    if(error == 0){
      for (let index = 0; index < ch.length; index++) {
        ch = ch.replace("&nbsp;"," ")    
      }
      this.templatePFE.template = ch;
      
      this.templatePFEService.modifier(this.templatePFE).subscribe((data: any)=>{
        console.log(data);
      }) 
    }
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

  getSite(directeurid){
    this.directeurService.getSite(directeurid).subscribe((data: any)=>{
      console.log("siteeeeeeeeeeeeeee");

      console.log(data);
      this.site = data;

      if(this.site.templatePFE == null){

      }  
      else{
        this.templatePFE = this.site.templatePFE;
        this.templatePFE.site = this.site.id;
      }
    }) 
  }
}
