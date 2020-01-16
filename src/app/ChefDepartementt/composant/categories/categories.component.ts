import { Component, OnInit } from '@angular/core';
import {ChefDepService} from '../../../Services/ChefDep.service';
import {CategoryModel} from '../../../Models/Category.Model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  listeCat: CategoryModel[] = [];
  /* public rows: Array<any> = [];
   public columns: Array<any> = [
     {title: 'Name', name: 'name', filtering: {filterString: '', placeholder: 'Filter by name'}},
     {
       title: 'Descritpion',
       name: 'description',
       sort: false,
       filtering: {filterString: '', placeholder: 'Filter by description'}
     },
     {title: 'Valide', className: ['office-header', 'text-success'], name: 'valide', sort: 'asc'},
   ];
   public page = 1;
   public itemsPerPage = 10;
   public maxSize = 5;
   public numPages = 1;
   public length = 0;
   public config: any = {
     paging: false,
     sorting: {columns: this.columns},
     filtering: {filterString: ''},
     className: ['table-striped', 'table-bordered']
   };
   public data: Array<any> = [];*/
  constructor(private chefService: ChefDepService) {
    // this.length = this.listeCat.length;
    this.getAllcat();
  }
  ngOnInit() {
    this.getAllcat();
    // this.onChangeTable(this.config);
  }
  getAllcat() {
    this.chefService.getAllcat().subscribe((value) => {
      this.listeCat = value;
    }, error => {
    }, () => {
      console.log(this.listeCat);
    });
  }
  /*
  public changePage(page: any, data: Array<any> = this.listeCat): Array<any> {
    const start = (page.page - 1) * page.itemsPerPage;
    const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }
  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }
  public changeFilter(data: any, config: any): any {
    let filteredData: Array<any> = data;
    this.columns.forEach((column: any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item: any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item: any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    let tempArray: Array<any> = [];
    filteredData.forEach((item: any) => {
      let flag = false;
      this.columns.forEach((column: any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }
  public onChangeTable(config: any, page: any = {page: this.page, itemsPerPage: this.itemsPerPage}): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    this.chefService.getAllcat()
      .subscribe(categories => {
        this.data = categories;
        this.length = this.data.length;
        let filteredData = this.changeFilter(this.data, this.config);
        let sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
      });
  }
  public onCellClick(data: any): any {
    console.log(data);
  }
   */
  validercat(id: number) {
    console.log(this.chefService.validercat(id));
    this.chefService.validercat(id).subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }

  unvalidercat(id: number) {
    console.log(this.chefService.unvalidercat(id));
    this.chefService.unvalidercat(id).subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }

}
