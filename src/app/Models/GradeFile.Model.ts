import {CategoryModel} from './Category.Model';
import {Student} from './student';

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
  categoriesoffile: CategoryModel[];
  student: Student;
}
