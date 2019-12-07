import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid' ;
import {SoutenanceService} from '../../Services/soutenance.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  calendarPlugins = [dayGridPlugin] ;
  CalendarEvents: any[] = [] ;
  constructor(private soutser: SoutenanceService) { }

  ngOnInit() {
    this.soutser.getallsoutcalendar().subscribe(data=>{this.CalendarEvents=data;
      console.log(this.CalendarEvents)});
  }


}
