import {CategoryModel} from './Category.Model';
import {TeacherModel} from './Teacher.Model';

export interface SkillModel {
  id: number;
  category: CategoryModel;
  teacher: TeacherModel;
}
