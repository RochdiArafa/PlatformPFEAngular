import { Component, OnInit } from '@angular/core';
import { TemplatePFE } from 'src/app/Model/template-pfe';
import { TemplatePFEService } from 'src/app/Service/TemplatePFEService/template-pfe.service';

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
}
