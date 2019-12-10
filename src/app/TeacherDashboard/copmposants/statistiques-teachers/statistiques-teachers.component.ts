import { Component, OnInit } from '@angular/core';
import {  ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import {TeacherService} from '../../../Services/teacher.service';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {GradeFileModel} from '../../../Models/GradeFile.Model';
import set = Reflect.set;
import {map} from 'rxjs/operators';
import {isNgTemplate} from '@angular/compiler';

@Component({
  selector: 'app-statistiques-teacher',
  templateUrl: './statistiques-teachers.component.html',
  styleUrls: ['./statistiques-teachers.component.scss']
})
export class StatistiquesTeacherComponent implements OnInit {


  listEncadredBetween2Years: GradeFileModel[] = [];
  listRapportedBetween2Years: GradeFileModel[] = [];
  listPresetedBetween2Years: GradeFileModel[] = [];

  listyears: number[] = [];


  categories: string[] = [];
  poids: number[] = [];
  categoriesRapported: string[] = [];
  poidsRapported: any[] = [];

  nbcategories: string[] = [];
  nbpoids: number[] = [];
  nbcategoriesRapported: string[] = [];
  nbpoidsRapported: any[] = [];




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
    { data: [], label: 'Encadred files' },
    { data: [], label: 'Rapported files' },
    { data: [], label: 'presented files' }

  ];

  constructor(private teacherSer: TeacherService, private router: Router) { }

  ngOnInit() {

    this.getFilesEncadredByYear(1999, 2220);
    this.getFilesRapportedByYear(1999, 2220);
    this.getFilesPresedentByYear(1999, 2200);

    this.getMostNottedCategories();
    this.getMostNottedCategoriesRapported();
    this.getnbencadredCategories();
    this.getnbategoriesRapported();
  }

  getFilesEncadredByYear(y1: number, y2: number ) {

    this.teacherSer.getfilesEncadredBetween2Yrears(y1, y2).subscribe(
      value => { this.listEncadredBetween2Years = value; },
      e => {},
      () => {


        for (let obj of this.listEncadredBetween2Years) {
          const dateencadre = new Date(obj.anneeScolaire);

          let capt = 0;
          for (let y of this.listyears) {
            if (y == dateencadre.getFullYear()) {
              capt = 1;
            }
          }

          if (capt == 0 ) {
            this.listyears.push(dateencadre.getFullYear());

          }


        }
        this.listyears.sort();

        let i = 0;
        for (let y of this.listyears) {
          let count = 0;
          this.teacherSer.getfilesEncadredBetween2Yrears(y, y).subscribe(
            v => { count = v.length; },
            e => {},
            () => {
              this.barChartData[0].data.push(count);
            }
          );
          i++;
        }

        for (let ys of this.listyears) {
          if (!this.barChartLabels.find(o => o === '' + ys))
            this.barChartLabels.push('' + ys ) ;
        }
        // this.barChartLabels.sort().reverse();
        // this.barChartLabels = this.barChartLabels.filter((el, i, a) => i === a.indexOf(el));
        console.log(this.listyears);
        //this.ngOnInit();

        setTimeout( function () {}, 500);

      }
    );




  }

  getFilesRapportedByYear(y1: number, y2: number ) {

    this.teacherSer.getfilesRapportedBetween2Yrears(y1, y2).subscribe(
      value => { this.listRapportedBetween2Years = value; },
      e => {},
      () => {

        for (let obj of this.listRapportedBetween2Years) {
          const dateencadre = new Date(obj.anneeScolaire);

          let capt = 0;
          for (let y of this.listyears) {
            if (y == dateencadre.getFullYear()) {
              capt = 1;
            }
          }

          if (capt == 0 ) {
            this.listyears.push(dateencadre.getFullYear());
          }


        }
        this.listyears.sort();

        let i = 0;
        for (let y of this.listyears) {
          let count = 0;
          this.teacherSer.getfilesRapportedBetween2Yrears(y, y).subscribe(
            v => { count = v.length; },
            e => {},
            () => {
              this.barChartData[1].data.push(count);
            }
          );
          i++;
        }

        for (let ys of this.listyears) {
          if (!this.barChartLabels.find(o => o === '' + ys))
            this.barChartLabels.push('' + ys ) ;
        }
        //this.barChartLabels.sort();
        // this.barChartLabels = this.barChartLabels.filter((el, i, a) => i === a.indexOf(el));
        console.log(this.listyears);
        //this.ngOnInit();
        setTimeout( function () {}, 500);
      }
    );



  }

  getFilesPresedentByYear(y1: number, y2: number ) {



    this.teacherSer.getfilesPresentedBetween2Yrears(y1, y2).subscribe(
      value => { this.listPresetedBetween2Years = value; },
      e => {},
      () => {

        for (let obj of this.listPresetedBetween2Years) {
          const dateencadre = new Date(obj.anneeScolaire);

          let capt = 0;
          for (let y of this.listyears) {
            if (y == dateencadre.getFullYear()) {
              capt = 1;
            }
          }

          if (capt == 0 ) {
            this.listyears.push(dateencadre.getFullYear());
          }


        }
        this.listyears.sort();

        let i = 0;
        for (let y of this.listyears) {
          let count = 0;
          this.teacherSer.getfilesPresentedBetween2Yrears(y, y).subscribe(
            v => { count = v.length; },
            e => {},
            () => {
              this.barChartData[2].data.push(count);
            }
          );
          i++;
        }
        for (let ys of this.listyears) {
          if (!this.barChartLabels.find(o => o === '' + ys))
            this.barChartLabels.push('' + ys ) ;
        }
        //this.barChartLabels.sort().reverse();
        //this.barChartLabels.sort();
        console.log(this.listyears);
        /*
                for (let a = 0 ; a < this.barChartLabels.length ; a++) {

                  for ( let j = a+1  ; j < this.barChartLabels.length ; j++ ) {
                      if (this.barChartLabels[a] === this.barChartLabels[j] ) {
                        this.barChartLabels.splice(j, 1);
                      }
                  }

                }*/


        // tslint:disable-next-line:no-shadowed-variable
        //this.barChartLabels = this.barChartLabels.filter((el, i, a) => i === a.indexOf(el));


        //this.ngOnInit();
        setTimeout( function () {}, 500);
      }
    );
  }

  public getMostNottedCategories() {


    this.teacherSer.getmosNottedencadredCategorie().subscribe(

      (v) => {

        // v.values();

        this.categories =  Object.keys(v);
        this.poids = Object.keys(v).map(key => v[key]);
      },
      e => {},
      () => {
        console.log('jksfnskjvnskj' + this.poids );
      });
  }


  public getMostNottedCategoriesRapported() {


    this.teacherSer.getmosNottedrapportedCategorie().subscribe(

      (v) => {

        // v.values();
        this.categoriesRapported =  Object.keys(v);
        this.poidsRapported = Object.values(v);
      },
      e => {},
      () => {
        // console.log('jksfnskjvnskj' + categories[1]);
      });
  }




  public getnbencadredCategories() {


    this.teacherSer.getmosencadredCategorie().subscribe(

      (v) => {

        // v.values();

        this.nbcategories =  Object.keys(v);
        this.nbpoids = Object.keys(v).map(key => v[key]);
      },
      e => {},
      () => {
        console.log('jksfnskjvnskj' + this.poids );
      });
  }


  public getnbategoriesRapported() {


    this.teacherSer.getmostrapportedCategorie().subscribe(

      (v) => {

        // v.values();
        this.nbcategoriesRapported =  Object.keys(v);
        this.nbpoidsRapported = Object.values(v);
      },
      e => {},
      () => {
        // console.log('jksfnskjvnskj' + categories[1]);
      });
  }






}
