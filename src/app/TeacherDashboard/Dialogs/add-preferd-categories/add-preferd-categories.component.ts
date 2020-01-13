import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TeacherService} from '../../../Services/teacher.service';
import {faClipboardCheck, faPen, faCalendarAlt, faCommentAlt, faFolderPlus} from '@fortawesome/free-solid-svg-icons';

import {CategoryModel} from '../../../Models/Category.Model';
import {CategoryService} from "../../../Services/category.service";

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

  ListPreferdCategories: CategoryModel[] = [];

  inputval = '';
  constructor(public dialogRef: MatDialogRef<AddPreferdCategoriesComponent>,private categorieSer: CategoryService,
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

        this.categorieSer.MypreferedCategories().subscribe(
          (value) => {this.ListPreferdCategories = value; },
          er => {},
          () => {

            for (let obj of this.ListPreferdCategories) {

              for (let  i = 0 ; i < this.ListCateoriesNames.length ; i++) {
                if (obj.name === this.ListCateoriesNames[i] ) {
                      this.ListCateoriesNames.splice(i , 1);
                      this.PoidsC.splice(i , 1);
                }
              }

            }
            console.log('these are Poids' + this.PoidsC);
            console.log('these are Cat Names' + this.ListCateoriesNames);
            this.aafficherListCateoriesNames = this.ListCateoriesNames;
            this.aafficherPoidsC = this.PoidsC;
          }
        );



      }
    );
  }
  addPreferdCategory(str: string) {

    // http://localhost:9080/PlatformPFE-web/rest/categories/preferedCat/nomc/{idt}
    this.Teachser.addPreferdCategory(str).subscribe(
      () => {

      },
      e => {},
      () => {
        this.dialogRef.close('');
      }
    );

  }


}
