import {Admin} from './Admin';
import {Directeurdesstages} from './Directeurdesstages';
import { TemplatePFE } from './template-pfe';
import { TemplateIntershipAgreement } from './template-intership-agreement';

export  class Site {

	 templatePFE :TemplatePFE;
	 templateIntershipAgreement :TemplateIntershipAgreement;
    
    public constructor(public id: number , public nom: string , public addresse: string , public admin: Admin, public directeurdesstages: Directeurdesstages) {}

}
