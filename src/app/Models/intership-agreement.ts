import { TemplateIntershipAgreement } from './template-intership-agreement';
import { Company } from './company';

export class IntershipAgreement {
    id : number;
	beginningDate: Date;
    endingDate : Date;
	company: Company;
    templateIntershipAgreement:TemplateIntershipAgreement;
     
    constructor(){

    }
}
