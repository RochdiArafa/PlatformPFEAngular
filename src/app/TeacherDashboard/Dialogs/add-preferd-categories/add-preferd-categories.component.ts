import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TeacherService} from '../../../Services/teacher.service';
import {faClipboardCheck, faPen, faCalendarAlt, faCommentAlt, faFolderPlus} from '@fortawesome/free-solid-svg-icons';

import {CategoryModel} from '../../../Models/Category.Model';

@Component({
  selector: 'app-add-preferd-categories',
  templateUrl: './add-preferd-categories.component.html',
  styleUrls: ['./add-preferd-categories.component.scss']
})
export class AddPreferdCategoriesComponent implements OnInit {

  folderIcon  = faFolderPlus;

  ListCateoriesNames: string[] = [];
  PoidsC: number[] = [];

  aafficherListCateoriesNames: string[] = [];
  aafficherPoidsC: number[] = [];

  inputval = '';
  constructor(public dialogRef: MatDialogRef<AddPreferdCategoriesComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private Teachser: TeacherService) { }

  ngOnInit() {
    this.getToAutoComplete();
  }
  autocomplete() {
    console.log('1');
    this.aafficherListCateoriesNames = this.ListCateoriesNames;
    this.aafficherPoidsC = this.PoidsC;

    let tempCateoriesNames: string[] = [];
    let temPoidsC: number[] = [];
    for (let i = 0 ; i < this.aafficherListCateoriesNames.length ; i++ ) {
      if (this.aafficherListCateoriesNames[i].toLocaleLowerCase().includes(this.inputval.toLocaleLowerCase())) {
        console.log('splicing');
        tempCateoriesNames.push(this.aafficherListCateoriesNames[i]);
        temPoidsC.push(this.aafficherPoidsC[i]);
        console.log('this is the new ' + temPoidsC);
        console.log('this is the input ' + tempCateoriesNames );
      }
    }
    this.aafficherListCateoriesNames = tempCateoriesNames;
    this.aafficherPoidsC = temPoidsC;

  }

  public getToAutoComplete() {
    this.Teachser.getautoComplete().subscribe(
      value => {
        console.log( 'hey this is th auto complete result ! ' + JSON.stringify(value));
        this.ListCateoriesNames = Object.keys(value);
        this.PoidsC = Object.values(value);
      },
      e => {},
      () => {
        console.log('these are Poids' + this.PoidsC);
        console.log('these are Cat Names' + this.ListCateoriesNames);
        this.aafficherListCateoriesNames = this.ListCateoriesNames;
        this.aafficherPoidsC = this.PoidsC;
      }
    );
  }


}
