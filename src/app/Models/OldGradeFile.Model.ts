import {CategoryModel} from './Category.Model';

export class OldGradeFileModel {
  id: number;
  title: string;
  description: string;
  problem: string;
  keyword: string;
  preValidated: boolean;
  note: number;
  event: string;
  motif: string;
  categoriesoffile: CategoryModel[];
  emetteur: string;
  datemodif: Date;
}
