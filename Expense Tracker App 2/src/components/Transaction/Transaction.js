import React, { useState } from "react";
import styles from "./Transaction.module.css";
import EditImage from "../../images/edit.png";
import DeleteImage from "../../images/trash-bin.png";

export default function Transaction({ expense, index, deleteExpense }) {
  const [currentHoverIndex, setCurrentHoverIndex] = useState(null);

  return (
    <li
      className={`${styles.transaction} ${
        expense.amount > 0 ? styles.profit : styles.loss
      }`}
      onMouseOver={() => setCurrentHoverIndex(index)}
      onMouseLeave={() => setCurrentHoverIndex(null)}
    >
      <div>{expense.text}</div>
      <div className={styles.transactionOptions}>
        <div
          className={`${styles.amount} ${
            currentHoverIndex === index ? styles.movePrice : ""
          }`}
        >
          ${expense.amount}
        </div>
        <div
          className={`${styles.btnContainer} ${
            currentHoverIndex === index ? styles.active : ""
          }`}
        >
          <div className={styles.edit} onClick={() => {}}>
            <img src={EditImage} height="100%" alt="Edit" />
          </div>
          <div
            className={styles.delete}
            onClick={() => deleteExpense(expense.id)}
          >
            <img src={DeleteImage} height="100%" alt="Delete" />
          </div>
        </div>
      </div>
    </li>
  );
}
