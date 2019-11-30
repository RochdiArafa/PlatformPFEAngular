import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {faTag, faPaste , faUserGraduate, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NoteValidator} from './customnoteValidator';
@Component({
  selector: 'app-view-detail-file',
  templateUrl: './view-detail-file.component.html',
  styleUrls: ['./view-detail-file.component.scss']
})
export class ViewDetailFileComponent implements OnInit {

  UsergraduatIcon = faUserGraduate;
  MotifIcon = faStickyNote;

  noteEncadreurForm = new FormGroup(
    {
      Note: new FormControl('', [NoteValidator]),
      Motif: new FormControl('', [Validators.required])
    }
  );

  noteRapporteurForm = new FormGroup({
    Note_Rappoteur: new FormControl('', [NoteValidator])
  });

  constructor(public dialogRef: MatDialogRef<ViewDetailFileComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  modifEncadrant() {

  }

  modifrapport() {}




}
