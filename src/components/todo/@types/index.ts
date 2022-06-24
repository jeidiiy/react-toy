export interface Todo {
  id: number,
  text: string,
  isCompleted: boolean
}

export interface TodoProps {
  todo: Todo
}