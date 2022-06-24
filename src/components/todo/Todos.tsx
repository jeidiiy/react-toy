import React from 'react'
import { useTodosStore } from '../../store/useTodosStore'
import { Todo, TodoProps } from './@types'

export const Todos = () => {
  const todos: Todo[] = useTodosStore((state) => state.todos)

  return (
    <div>
      {todos.map((todo) => (
        <TodoComponent key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

const TodoComponent = ({ todo }: TodoProps) => {
  const { id, text, isCompleted } = todo
  const { updateTodo, removeTodo } = useTodosStore((state) => ({
    updateTodo: state.updateTodo,
    removeTodo: state.removeTodo,
  }))

  return (
    <div>
      <span>{id}</span>
      <span style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
        {text}
      </span>
      <input
        type="checkbox"
        checked={isCompleted}
        onClick={() => updateTodo(id)}
      />
      <button onClick={() => removeTodo(id)}>X</button>
    </div>
  )
}
