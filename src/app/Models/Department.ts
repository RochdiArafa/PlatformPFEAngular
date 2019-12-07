import {Admin} from './Admin';
import {Chefdepartement} from './Chefdepartement';

export  class Department {
 public constructor(public nomdepartement: string , public codedepartement: number , public admin: Admin, public id: number, public chefdepartement: Chefdepartement
 ){}
}
