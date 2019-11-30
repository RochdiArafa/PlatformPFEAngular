import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../Services/category.service';
import {CategoryModel} from '../../../Models/Category.Model';
import {faTrashAlt, faPlusCircle, faBullhorn} from '@fortawesome/free-solid-svg-icons';
import {MydialogueComponent} from '../../Dialogs/mydialogue/mydialogue.component';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-my-categories',
  templateUrl: './my-categories.component.html',
  styleUrls: ['./my-categories.component.scss']
})
export class MyCategoriesComponent implements OnInit {

  // FontAwesome
  trashIncon = faTrashAlt;
  addcatIcon = faPlusCircle;
  annonceIcon = faBullhorn;
  //
  ListPreferedCategories: CategoryModel[] = [];
  constructor(private categorieSer: CategoryService, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.GetListPreferedCategorie();
  }
  GetListPreferedCategorie() {
    this.categorieSer.MyProposedCategories().subscribe(
      (value) => {this.ListPreferedCategories = value; },
      er => {},
      () => {
        console.log(this.ListPreferedCategories);
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MydialogueComponent, {
      data: {name: 'mo', animal: 'zitoun'}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });

  }

  deletePreferedCategory(idC: number) {
    console.log(this.categorieSer.deletePreferedCategorie(idC));
    this.categorieSer.deletePreferedCategorie(idC).subscribe(
      () => {
        console.log(this.ListPreferedCategories);
        this.ngOnInit();
        }
    );

  }


}
