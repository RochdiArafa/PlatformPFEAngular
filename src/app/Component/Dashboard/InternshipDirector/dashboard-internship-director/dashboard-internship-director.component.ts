import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-internship-director',
  templateUrl: './dashboard-internship-director.component.html',
  styleUrls: ['./dashboard-internship-director.component.scss']
})
export class DashboardInternshipDirectorComponent implements OnInit {
  afficherStatis : boolean = true;
  afficherEtudiant : boolean = false;
  afficherTemplatePFE : boolean = false;
  afficherTemplateConvention : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showStatis(){
    this.afficherEtudiant = false;
    this.afficherStatis = true;
    this.afficherTemplatePFE = false;
    this.afficherTemplateConvention = false;  }

  showStudent(){
    this.afficherEtudiant = true;
    this.afficherStatis = false;
    this.afficherTemplatePFE = false;
    this.afficherTemplateConvention = false;



  }

  showTemplatePFE(){
    this.afficherEtudiant = false;
    this.afficherStatis = false;
    this.afficherTemplatePFE = true;
    this.afficherTemplateConvention = false;  }

  showTemplateConvention(){
    this.afficherEtudiant = false;
    this.afficherStatis = false;
    this.afficherTemplatePFE = false;
    this.afficherTemplateConvention = true;  }


}
