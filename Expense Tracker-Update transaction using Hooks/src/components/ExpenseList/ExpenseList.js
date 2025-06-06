import React from "react";
import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";

const ExpenseList = ({ expenses, deleteExpense ,updateExpense}) => {
  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {expenses.map((expense, i) => {
          return (
            <Transaction
              index={i}
              key={expense.id}
              expense={expense}
              deleteExpense={deleteExpense}
              //Pass props here to handle updation
              updateExpense={updateExpense}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ExpenseList;
