import React, { useContext } from "react";
import { TransactionContext } from "../../store/TransactionContext";

const DisplayAmount = () => {
  const { globalState } = useContext(TransactionContext);

  const incomeAmt = globalState
    .filter((transaction) => transaction.type === "income")
    .map((transaction) => transaction.amount)
    .reduce((prevValue, curValue )=> {
      return prevValue + curValue
    }, 0)

    const expenseAmt = globalState
    .filter((transaction) => transaction.type === "expense")
    .map((transaction) => transaction.amount)
    .reduce((prevValue, curValue )=> {
      return prevValue + curValue
    }, 0)

  return (
    <>
      <p>Balance Amount: {incomeAmt - expenseAmt}</p>
      <p>Income Amount: {incomeAmt}</p>
      <p>Expense Amount: {expenseAmt}</p>
    </>
  );
};

export default DisplayAmount;
