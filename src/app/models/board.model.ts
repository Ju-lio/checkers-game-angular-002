import { Column } from "./column.model"

export type Board = {
  line: number,
  columns: Column[]
}