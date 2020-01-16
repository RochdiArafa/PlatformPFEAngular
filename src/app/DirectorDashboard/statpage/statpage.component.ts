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
  public barChartLabels1: Label[] = [];

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Fiches acceptées' },
    { data: [], label: 'Fiches refusées' },
    { data: [], label: 'Fiches annulées' },
    { data: [], label: 'Fiches en cours de traitement' }

  ];

  public barChartData1: ChartDataSets[] = [
    { data: [], label: 'Fiches acceptées' },
    { data: [], label: 'Fiches refusées' },
    { data: [], label: 'Fiches annulées' }
  ];

  constructor(private route: Router, private directorSer: DirectorService) { }

  ngOnInit() {
  	this.getStatWaiting();
  	this.getStatAccepted();
  	this.getStatRefused();
  	this.getStatCanceled();
    this.getStatAccepted3Years();
    this.getStatRefused3Years();
    this.getStatCanceled3Years();
  	this.barChartLabels.push(""+(new Date()).getFullYear());
    this.get3YearsLabel();
  }

  get3YearsLabel(){
    let year1=(new Date()).getFullYear();
    let year2=(new Date()).getFullYear()-1;
    let year3=(new Date()).getFullYear()-2;
    let year11=year1+1;
    let year22=year2+1;
    let year33=year3+1;
    this.barChartLabels1.push(""+year3+"-"+year33);
    this.barChartLabels1.push(""+year2+"-"+year22);
    this.barChartLabels1.push(""+year1+"-"+year11);
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

  getStatAccepted3Years(){
    let count=0;
    let currentYear=(new Date()).getFullYear()-2;
    let nextYear=currentYear+1;
    for (var i = 0; i <= 2; i++) {
      this.directorSer.getListFiles("acceptée","",""+currentYear+"-"+nextYear).subscribe(
      value => { if(value!=null)
        count = value.length;},
      error => {},
      ()=>{this.barChartData1[0].data.push(count);} 
      );
      currentYear++;
      nextYear++;
    }
  }
  getStatRefused3Years(){
    let count=0;
    let currentYear=(new Date()).getFullYear()-2;
    let nextYear=currentYear+1;
    for (var i = 0; i <= 2; i++) {
      this.directorSer.getListFiles("refusée","",""+currentYear+"-"+nextYear).subscribe(
      value => { if(value!=null)
        count = value.length;},
      error => {},
      ()=>{this.barChartData1[1].data.push(count);} 
      );
      currentYear++;
      nextYear++;
    }
  }
  getStatCanceled3Years(){
    let count=0;
    let currentYear=(new Date()).getFullYear()-2;
    let nextYear=currentYear+1;
    for (var i = 0; i <= 2; i++) {
      console.log(""+currentYear+"-"+nextYear);
      this.directorSer.getListFiles("annulée","",""+currentYear+"-"+nextYear).subscribe(
      value => { if(value!=null)
        count = value.length;},
      error => {},
      ()=>{this.barChartData1[2].data.push(count);} 
      );
      currentYear++;
      nextYear++;
    }
  }

}
