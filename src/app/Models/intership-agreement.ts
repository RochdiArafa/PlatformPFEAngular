import { TemplateIntershipAgreement } from './template-intership-agreement';
import { Company } from './company';

export class IntershipAgreement {
    id : number;
	beginningDate: string;
    endingDate : string;
	company: Company;
    templateIntershipAgreement:TemplateIntershipAgreement;
     
    constructor(){

    }
}
