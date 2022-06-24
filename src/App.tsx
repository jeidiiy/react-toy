import React from 'react'
import './App.css'
import TodoControl from './components/todo/TodoControl'
import { Todos } from './components/todo/Todos'

function App() {
  return (
    <div className="App">
      <Todos />
      <TodoControl />
    </div>
  )
}

export default App
