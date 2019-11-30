import { Student } from './student';
import { Company } from './company';
import { TemplatePFE } from './template-pfe';

export class GradProjectFile {

     id:number;
	 title:string;
	 description:string;
	 problem : string;
	 functionnalities: string;
     keyword : string;
    
    	
 preValidated:boolean;
	

 anneeScolaire : Date =  new Date();

  Motif : string;

 note : number;

 note_rapporteur:number;

  Student:Student;

//  soutenance:Soutenance ;

  company:Company;

  templatePFE : TemplatePFE;

// Categorys :projectCategory[];

    constructor(){

    }
}
