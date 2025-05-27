import React, { useState, useEffect, useRef } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = ({ addExpense, updateExpense, editableExpense }) => {
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    if (editableExpense) {
      expenseTextInput.current.value = editableExpense.text;
      expenseAmountInput.current.value = editableExpense.amount;
      setEditId(editableExpense.id);
      setIsEditing(true);
    }
  }, [editableExpense]);

  const clearInput = () => {
    expenseTextInput.current.value = "";
    expenseAmountInput.current.value = "";
    setEditId(null);
    setIsEditing(false);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const text = expenseTextInput.current.value.trim();
    const amount = expenseAmountInput.current.value.trim();

    if (!text || parseFloat(amount) === 0) return;

    const expense = {
      id: isEditing ? editId : new Date().getTime(),
      text,
      amount,
    };

    if (isEditing) {
      updateExpense(expense);
    } else {
      addExpense(expense);
    }

    clearInput();
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h3>{isEditing ? "Edit Transaction" : "Add new transaction"}</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        ref={expenseTextInput}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense, positive - income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        ref={expenseAmountInput}
        required
      />
      <button className={styles.submitBtn}>
        {isEditing ? "Edit Transaction" : "Add Transaction"}
      </button>
    </form>
  );
};

export default ExpenseForm;
