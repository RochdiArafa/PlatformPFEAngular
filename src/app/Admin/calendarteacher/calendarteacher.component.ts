import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid' ;
import {SoutenanceService} from '../../Services/soutenance.service';

@Component({
  selector: 'app-calendarteacher',
  templateUrl: './calendarteacher.component.html',
  styleUrls: ['./calendarteacher.component.scss']
})
export class CalendarteacherComponent implements OnInit {
  calendarPlugins = [dayGridPlugin] ;
  CalendarEvents: any[] = [] ;

  constructor(private soutser: SoutenanceService) { }

  ngOnInit() {
    this.soutser.getteacherbysout().subscribe(data=>{this.CalendarEvents=data;
      console.log(this.CalendarEvents)});
  }

}
