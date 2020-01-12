import { User } from './user';
import { Site } from './site';
import { Teacher } from './teacher';
import { GradProjectFile } from './grad-project-file';
import { Admin } from './admin';
import { Company } from './company';
import { Notification } from './notification';

export class Student extends User{
	 company: Company;
	 grade: number;
	 encadrants: Teacher ;
	 rapporteurs : Teacher;
	 admin: Admin ;
	 pfeFile: GradProjectFile;
	 president: Teacher;
	 site: Site;
	 notifications: Notification[];


    constructor(){
        super();
    }

}
