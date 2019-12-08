import {Admin} from './Admin';
import {Directeurdesstages} from './Directeurdesstages';

export  class Site {public constructor(public id: number , public nom: string , public addresse: string , public admin: Admin, public directeurdesstages: Directeurdesstages) {}

}
