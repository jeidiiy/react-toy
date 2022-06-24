import { Todo } from '../components/todo/@types';
import create from 'zustand';

interface TodoState {
  todos: Array<Todo>,
  addTodo: Function,
  updateTodo: Function,
  removeTodo: Function
}

const initialState: Todo[] = [
  { id: 1, text: '리액트 연습', isCompleted: true },
  { id: 2, text: '상태관리 라이브러리 학습', isCompleted: true },
  { id: 3, text: '타입스크립트 학습', isCompleted: true },
]

export const useTodosStore = create<TodoState, []>((set) => ({
  todos: initialState,
  addTodo: (todo: Todo) => set(state => ({ todos: state.todos.concat(todo) })),
  updateTodo: (id: number) => set(state => {
    const newTodos = [...state.todos]
    const target: Todo | undefined = newTodos.find(todo => todo.id === id);
    if (target) {
      target.isCompleted = !target.isCompleted
    }
    return { ...state, todos: newTodos }
  }),
  removeTodo: (id: number) => set(state => ({ todos: state.todos.filter(todo => todo.id !== id) })),
}))