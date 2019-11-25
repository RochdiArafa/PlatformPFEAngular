import { Student } from './student';
import { Company } from './company';
import { TemplatePFE } from './template-pfe';

export class GradProjectFile {

    private id:number;
	private title:string;
	private description:string;
	private problem : string;
	private functionnalities: string;
    private keyword : string;
    
    	
private preValidated:boolean;
	

private anneeScolaire : Date =  new Date();

private  Motif : string;

private note : number;

private note_rapporteur:number;

private  Student:Student;

//private  soutenance:Soutenance ;

private  company:Company;

private  templatePFE : TemplatePFE;

//private Categorys :projectCategory[];

    constructor(){

    }
}
