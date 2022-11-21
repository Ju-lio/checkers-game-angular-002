import { Column } from './column.model';

export type Square = {
  line: number;
  columns: Column[];
  toMove: boolean;
};
