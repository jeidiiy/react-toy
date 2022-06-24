import React from 'react'
import { useRef, useState } from 'react'
import { useTodosStore } from '../../store/useTodosStore'
import { Todo } from './@types'

export default function TodoControl() {
  const [value, setValue] = useState('')
  const addTodo = useTodosStore((state) => state.addTodo)

  const uniqueId = useRef(4)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTodo: Todo = {
      id: uniqueId.current++,
      text: value,
      isCompleted: false,
    }
    addTodo(newTodo)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add todo</button>
    </form>
  )
}
