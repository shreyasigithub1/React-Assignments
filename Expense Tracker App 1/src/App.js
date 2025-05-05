import "./App.css";
import React from "react";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import { useState } from "react";

export default function App() {
  // Create state for the expenses here

  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, { ...expense, id: Date.now() }]);
   

  };

  // Create function to add an expense

  // Create function to delete an expense
  
  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        {/* Render expense form here */}
        <ExpenseForm onAdd={addExpense} />
        <div className="expenseContainer">
          {/* Render Expense Info here
            Render Expense List here */}
          <ExpenseInfo expenses={expenses} />
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    </>
  );
}
