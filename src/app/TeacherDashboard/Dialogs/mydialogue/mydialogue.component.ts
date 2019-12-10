import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {faTag, faPaste} from '@fortawesome/free-solid-svg-icons';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../Services/category.service';
import {CategoryModel} from '../../../Models/Category.Model';

@Component({
  selector: 'app-mydialogue',
  templateUrl: './mydialogue.component.html',
  styleUrls: ['./mydialogue.component.scss']
})
export class MydialogueComponent implements OnInit {

  // les Icons
  nameIcon = faTag;
  descriptionIcon = faPaste;

  CategoryFrom = new FormGroup({
    CategoryName: new  FormControl('', [Validators.required]),
    CategoryDescription: new  FormControl('', [Validators.required])
  });

  constructor(public dialogRef: MatDialogRef<MydialogueComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public categoryService: CategoryService) { }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

  ngOnInit() {
  }
  addCateory() {
    const c = {name: '', description: '', id: 0, valide: false};
    c.name = this.CategoryFrom.value.CategoryName;
    c.description = this.CategoryFrom.value.CategoryDescription;
    console.log(c);
    this.categoryService.ProposerCategorie(c).subscribe(
      (u) => {this.dialogRef.close(); }

    );

  }
}
