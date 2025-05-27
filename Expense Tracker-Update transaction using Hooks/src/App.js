import { useState, useReducer } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        expenses: [payload.expense, ...state.expenses],
      };
    case "REMOVE_EXPENSE":
      return {
        expenses: state.expenses.filter((expense) => expense.id !== payload.id),
      };
    case "UPDATE_EXPENSE":
      return {
        expenses: state.expenses.map((expense) =>
          expense.id === payload.updatedExpense.id ? payload.updatedExpense : expense
        ),
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { expenses: [] });
  const [editableExpense, setEditableExpense] = useState(null);

  const addExpense = (expense) => {
    dispatch({ type: "ADD_EXPENSE", payload: { expense } });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "REMOVE_EXPENSE", payload: { id } });
  };

  const startEditing = (expense) => {
    setEditableExpense(expense);
  };

  const saveEditedExpense = (updatedExpense) => {
    dispatch({ type: "UPDATE_EXPENSE", payload: { updatedExpense } });
    setEditableExpense(null);
  };

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm
          addExpense={addExpense}
          updateExpense={saveEditedExpense}
          editableExpense={editableExpense}
        />
        <div className="expenseContainer">
          <ExpenseInfo expenses={state.expenses} />
          <ExpenseList
            expenses={state.expenses}
            deleteExpense={deleteExpense}
            updateExpense={startEditing}
          />
        </div>
      </div>
    </>
  );
}

export default App;
