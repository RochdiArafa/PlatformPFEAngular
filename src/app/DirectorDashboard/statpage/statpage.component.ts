import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DirectorService} from '../../Services/director.service';
import {NavigationDirectorService} from '../../Services/navigation-director.service';
import {StudentModel} from '../../Models/Student.Model';
import {  ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { GradeFileModel } from '../../Models/GradeFile.Model';

@Component({
  selector: 'app-statpage',
  templateUrl: './statpage.component.html',
  styleUrls: ['./statpage.component.scss']
})
export class StatpageComponent implements OnInit {

	listAccepted: GradeFileModel[] = [];
	listRefused: GradeFileModel[] = [];
	listCanceled: GradeFileModel[] = [];
	listWaiting: GradeFileModel[] = [];

	public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Fiches acceptées' },
    { data: [], label: 'Fiches refusées' },
    { data: [], label: 'Fiches annulées' },
    { data: [], label: 'Fiches en cours de traitement' }

  ];

  constructor(private route: Router, private directorSer: DirectorService) { }

  ngOnInit() {
  	this.getStatWaiting();
  	this.getStatAccepted();
  	this.getStatRefused();
  	this.getStatCanceled();
  	this.barChartLabels.push(""+(new Date()).getFullYear());
  }

  getStatWaiting(){
  	let count=0;
  	let currentYear=(new Date()).getFullYear();
  	let nextYear=currentYear+1;
  	this.directorSer.getListFiles("encours","",""+currentYear+"-"+nextYear).subscribe(
  		value => { if(value!=null)
  			count = value.length;},
  		error => {},
  		()=>{this.barChartData[3].data.push(count);} 
  		);
  }
  getStatAccepted(){
  	let count=0;
  	let currentYear=(new Date()).getFullYear();
  	let nextYear=currentYear+1;
  	this.directorSer.getListFiles("acceptée","",""+currentYear+"-"+nextYear).subscribe(
  		value => { if(value!=null)
  			count = value.length;},
  		error => {},
  		()=>{this.barChartData[0].data.push(count);} 
  		);
  }
  getStatRefused(){
  	let count=0;
  	let currentYear=(new Date()).getFullYear();
  	let nextYear=currentYear+1;
  	this.directorSer.getListFiles("refusée","",""+currentYear+"-"+nextYear).subscribe(
  		value => { if(value!=null)
  			count = value.length;},
  		error => {},
  		()=>{this.barChartData[1].data.push(count);} 
  		);
  }
  getStatCanceled(){
  	let count=0;
  	let currentYear=(new Date()).getFullYear();
  	let nextYear=currentYear+1;
  	this.directorSer.getListFiles("annulée","",""+currentYear+"-"+nextYear).subscribe(
  		value => { if(value!=null)
  			count = value.length;},
  		error => {},
  		()=>{this.barChartData[2].data.push(count);} 
  		);
  }

}
