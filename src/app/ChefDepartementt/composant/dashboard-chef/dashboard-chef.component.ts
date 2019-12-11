import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavigationChefService} from '../../../Services/navigation-chef.service';

@Component({
  selector: 'app-dashboard-chef',
  templateUrl: './dashboard-chef.component.html',
  styleUrls: ['./dashboard-chef.component.scss']
})
export class DashboardChefComponent implements OnInit {
  constructor(private route: Router, private navChef: NavigationChefService) { }

  ngOnInit() {
  }
  changetoOldPfe() {
    this.navChef.navcheftooldpfe = true;
    this.navChef.navcheftoadministration = false;
    this.navChef.navcheftocategories = false;
    this.navChef.navcheftofiches = false;
    this.navChef.navcheftoencadrement = false;
    this.navChef.navcheftotraitement = false;
  }
  changetoAdministration() {
    this.navChef.navcheftooldpfe = false;
    this.navChef.navcheftoadministration = true;
    this.navChef.navcheftocategories = false;
    this.navChef.navcheftofiches = false;
    this.navChef.navcheftoencadrement = false;
    this.navChef.navcheftotraitement = false;
  }
  changetocategories() {
    this.navChef.navcheftooldpfe = false;
    this.navChef.navcheftoadministration = false;
    this.navChef.navcheftocategories = true;
    this.navChef.navcheftofiches = false;
    this.navChef.navcheftoencadrement = false;
    this.navChef.navcheftotraitement = false;
  }
  changetofiches() {
    this.navChef.navcheftooldpfe = false;
    this.navChef.navcheftoadministration = false;
    this.navChef.navcheftocategories = false;
    this.navChef.navcheftofiches = true;
    this.navChef.navcheftoencadrement = false;
    this.navChef.navcheftotraitement = false;
  }

  changetoprevalidation() {
    this.navChef.navcheftooldpfe = false;
    this.navChef.navcheftoadministration = false;
    this.navChef.navcheftocategories = false;
    this.navChef.navcheftofiches = false;
    this.navChef.navcheftoencadrement = true;
    this.navChef.navcheftotraitement = false;
  }
  changertotraitement() {
    this.navChef.navcheftooldpfe = false;
    this.navChef.navcheftoadministration = false;
    this.navChef.navcheftocategories = false;
    this.navChef.navcheftofiches = false;
    this.navChef.navcheftoencadrement = false;
    this.navChef.navcheftotraitement = true;
  }
}
