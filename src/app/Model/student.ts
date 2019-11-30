import { User } from './user';
import { Site } from './site';
import { Teacher } from './teacher';
import { GradProjectFile } from './grad-project-file';
import { Admin } from './admin';
import { Company } from './company';

export class Student extends User{

	private company:Company;
	private grade:number;
	private  encadrants:Teacher ;
	private  rapporteurs : Teacher;
	private  admin : Admin ;
	private PfeFile:GradProjectFile;
	private  president:Teacher;
	private site:Site;

    
    constructor(){
        super();
    }

}
