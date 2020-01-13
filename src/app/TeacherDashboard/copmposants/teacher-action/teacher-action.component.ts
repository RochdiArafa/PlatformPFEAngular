import { Component, OnInit } from '@angular/core';
import {faClipboardCheck, faPen, faCalendarAlt, faCommentAlt} from '@fortawesome/free-solid-svg-icons';
import {ActionTeacherModel} from '../../../Models/ActionTeacher.Model';
import {TeacherService} from '../../../Services/teacher.service';

@Component({
  selector: 'app-teacher-action',
  templateUrl: './teacher-action.component.html',
  styleUrls: ['./teacher-action.component.scss']
})
export class TeacherActionComponent implements OnInit {
  // fotawsome icons
  checkicon = faClipboardCheck;
  penIcon = faPen;
  commentIcon = faCommentAlt;
  // *****
  ListActions: ActionTeacherModel[] = [];
  constructor(private TeacherSer: TeacherService) { }

  ngOnInit() {
    this.GetListActionsOfTeacher();
  }

  GetListActionsOfTeacher() {
    this.TeacherSer.getTeachersAction().subscribe((value) => {
      this.ListActions = value;
      // this.ListActions.log
    });
  }

}
