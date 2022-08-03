import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import TodoControl from './components/todo/TodoControl';
import { Todos } from './components/todo/Todos';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  useEffect(() => {
    console.log(startDate);
  }, [startDate]);

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
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        popperPlacement="auto"
      />
    </div>
  );
}

export default App;
