import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CategoryService} from '../../../Services/category.service';
import {TeacherService} from '../../../Services/teacher.service';
import {CategoryModel} from '../../../Models/Category.Model';
import {SkillModel} from '../../../Models/skill.Model';
import {faClipboardCheck, faPen, faCalendarAlt, faCommentAlt, faFolderPlus} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.scss']
})
export class AddSkillsComponent implements OnInit {

  folderIcon = faFolderPlus;

  ListCategories: CategoryModel[] = [];
  Skills: SkillModel[] = [];
  constructor(public dialogRef: MatDialogRef<AddSkillsComponent>, private categorieSer: CategoryService,
              @Inject(MAT_DIALOG_DATA) public data: any, private Teachser: TeacherService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.Teachser.getallCategories().subscribe(
      v => {this.ListCategories = v; },
      e => {console.log(e); },
      () => {
        this.Teachser.getMySkills().subscribe(
          (v) => {
            this.Skills = v;
          },
          e => {},
          () => {

            for (let obj of this.Skills) {
            for (let i = 0 ; i < this.ListCategories.length ; i++) {
               if(obj.categorie.id == this.ListCategories[i].id || this.ListCategories[i].valide == false ) {
                 this.ListCategories.splice(i, 1);
               }
              }
            }

          }
        );
      }
    );
  }

  addSkill(idC: number) {
    this.Teachser.addskills(idC).subscribe(
      v => {},
      e => {},
      () => {
        this.dialogRef.close('');
      }
    );
  }

}
