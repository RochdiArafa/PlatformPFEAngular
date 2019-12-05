import {CategoryModel} from './Category.Model';

export interface TeacherModel {
  phoneNumber: number;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  image: string;
  categoriesProposed: CategoryModel[];
  preferedCategories: CategoryModel[];
}
