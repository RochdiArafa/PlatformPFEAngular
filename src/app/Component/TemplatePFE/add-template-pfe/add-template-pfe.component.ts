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
  showerrorTitre : boolean = false;
  showerrordescription : boolean = false;
  showerrorproblem : boolean = false;
  showerrorfunctionnalities : boolean = false;
  
  constructor(public templatePFEService:TemplatePFEService ) { 
    this.templatePFE = new TemplatePFE();
  }

  ngOnInit() {
  }

  addTemplatePFE(){
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
      error++;
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
      var ch = this.templatePFE.template;
      for (let index = 0; index < ch.length; index++) {
        ch = ch.replace("&nbsp;"," ")    
      }
      this.templatePFE.template = ch;

      this.templatePFE.site= parseInt(sessionStorage.getItem('connectedSite'));
      this.templatePFEService.ajouter(this.templatePFE).subscribe((data: any)=>{
        console.log(data);
        this.templatePFE = new TemplatePFE();
      })
    } 
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
