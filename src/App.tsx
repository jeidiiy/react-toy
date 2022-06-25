import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'
import TodoControl from './components/todo/TodoControl'
import { Todos } from './components/todo/Todos'

function App() {
  return (
    <div className="App">
      <Todos />
      <TodoControl />
      <h1>Bookkepper</h1>
      <nav className="border-b-2 border-solid pd-4">
        <Link to="/invoices">Invoices</Link> |{' '}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
