import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {faTag, faPaste , faUserGraduate, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NoteValidator} from './customnoteValidator';
import {TeacherService} from '../../../Services/teacher.service';
@Component({
  selector: 'app-view-detail-file',
  templateUrl: './view-detail-file.component.html',
  styleUrls: ['./view-detail-file.component.scss']
})
export class ViewDetailFileComponent implements OnInit {

  UsergraduatIcon = faUserGraduate;
  MotifIcon = faStickyNote;

  justModified = false;

  noteEncadreurForm = new FormGroup(
    {
      Note: new FormControl('', [NoteValidator]),
      Motif: new FormControl('', [Validators.required])
    }
  );

  noteRapporteurForm = new FormGroup({
    Note_Rappoteur: new FormControl('', [NoteValidator, Validators.max(20), Validators.min(0)])
  });

  constructor(public dialogRef: MatDialogRef<ViewDetailFileComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private Teachser: TeacherService) { }

  ngOnInit() {
  }

  modifEncadrant() {
    this.Teachser.donnerMotriffileenttqEncadrant(this.data.pfe.id, this.noteEncadreurForm.value.Motif).subscribe(
      (value) => { console.log('************'); },
      e => {},
      () => {
        console.log('************');
      }
    );
    this.Teachser.noterfileenttqEncadrant(this.data.pfe.id, this.noteEncadreurForm.value.Note).subscribe(
      (value) => {  console.log('************');
        this.dialogRef.close(''); },
      e => {},
      () => {
        console.log('************');
        this.dialogRef.close('');
      }
    );

    this.justModified = true;

  }

  modifrapport() {
    this.Teachser.noterfileenttqRapporteur(this.data.pfe.id, this.noteRapporteurForm.value.Note_Rappoteur).subscribe(
      () => {},
      e => {},
      () => {

        this.dialogRef.close('');
      }
    );
    this.justModified = true;
  }




}
