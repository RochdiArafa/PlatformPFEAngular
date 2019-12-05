import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../Services/category.service';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {SkillModel} from '../../../Models/Skill.Model';
import {TeacherService} from '../../../Services/teacher.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

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
        //this.ngOnInit();
      }
    );
  }

}
