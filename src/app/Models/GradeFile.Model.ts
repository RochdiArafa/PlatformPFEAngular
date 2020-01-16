import {CategoryModel} from './Category.Model';
import {Student} from './student';

import {StudentModel} from '../Models/Student.Model';

export interface GradeFileModel {
  id: number;
  title: string;
  description: string;
  problem: string;
  keyword: string;
  preValidated: boolean;
  note: number;
  note_rapporteur: number;
  motif: string;
  anneeScolaire: Date;
  anneeScolairee:string;
  Student:StudentModel;
  stateRapport:string;
  state:string;
  categoriesoffile: CategoryModel[];
  student: Student;
}
