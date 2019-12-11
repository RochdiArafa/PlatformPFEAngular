import { Component, OnInit } from '@angular/core';
import {ChefDepService} from '../../../Services/ChefDep.service';
import {OldGradeFileModel} from '../../../Models/OldGradeFile.Model';

@Component({
  selector: 'app-oldpfe',
  templateUrl: './oldpfe.component.html',
  styleUrls: ['./oldpfe.component.scss']
})
export class OldpfeComponent implements OnInit {
  ListeOld: OldGradeFileModel [] = [];
  clicked = false;
  objj: OldGradeFileModel;
  constructor(private chefService: ChefDepService) { }

  ngOnInit() {
    this.Getalloldpfe();
  }
  Getalloldpfe() {
    this.chefService.getAllOldPfe().subscribe((value) => {
      this.ListeOld = value;
    }, error => {}, () => {console.log(this.ListeOld); });
  }
  click(Oldpfe: OldGradeFileModel) {
    this.objj = Oldpfe;
    if (this.clicked === false) {
      this.clicked = true;
    } else {
      this.clicked = false ; }
  }
}
