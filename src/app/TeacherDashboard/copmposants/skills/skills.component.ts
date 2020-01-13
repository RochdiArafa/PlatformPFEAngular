import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../Services/category.service';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {SkillModel} from '../../../Models/Skill.Model';
import {TeacherService} from '../../../Services/teacher.service';
import {faTrashAlt, faPlusCircle, faBullhorn, faGrinStars} from '@fortawesome/free-solid-svg-icons';
import {AddPreferdCategoriesComponent} from "../../Dialogs/add-preferd-categories/add-preferd-categories.component";
import {AddSkillsComponent} from "../../Dialogs/add-skills/add-skills.component";


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  trashIncon = faTrashAlt;
  addcatIcon = faPlusCircle;
  annonceIcon = faBullhorn;
  proposedIcon = faGrinStars;


  ListSkills: SkillModel[] = [];
  constructor(private teacherSer: TeacherService, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.getMySkills();
  }

  getMySkills() {
    this.teacherSer.getMySkills().subscribe(
      (v) => {
        this.ListSkills = v;
      },
      e => {},
      () => {
        // this.ngOnInit();
      }
    );
  }
  addSkillsDialogue() {
    const dialogRef = this.dialog.open(AddSkillsComponent, { maxHeight: '600px',
      data: {name: 'mo', animal: 'zitoun'}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
      // this.animal = result;
    });
  }
}
