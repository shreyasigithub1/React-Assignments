import React from "react";
import styles from "./ExpenseInfo.module.css";

export default function ExpenseInfo({ expenses }) {
  const amounts = expenses.map((e) => e.amount);
  const total = amounts.reduce((acc, curr) => acc + curr, 0).toFixed(2);
  const income = amounts
    .filter((amt) => amt > 0)
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);
  const expense = (
    amounts.filter((amt) => amt < 0).reduce((acc, curr) => acc + curr, 0) * -1
  ).toFixed(2);

  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${total}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${expense}
          </p>
        </div>
      </div>
    </div>
  );
}
