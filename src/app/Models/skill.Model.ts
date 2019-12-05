import {CategoryModel} from './Category.Model';
import {TeacherModel} from './Teacher.Model';

export interface SkillModel {
  id: number;
  categorie: CategoryModel;
  teachers: TeacherModel;
}
