import {CategoryModel} from './Category.Model';

export interface TeacherModel {
  id: number;
  phoneNumber: number;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  image: string;
  categoriesProposed: CategoryModel[];
  preferedCategories: CategoryModel[];
  nbmaxrap: number;
}
