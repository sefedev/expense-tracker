import React, { useContext } from "react";
import { TransactionContext } from "../../store/TransactionContext";

const IncomeAmount = () => {
  const { globalState, setIncomeAmount } = useContext(TransactionContext);
  const incomeAmount = globalState
    .filter((transaction) => transaction.type === "income")
    .map((transaction) => transaction.amount)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    setIncomeAmount(incomeAmount)
  return (
    <>
      <p>Income Amount:{incomeAmount}</p>
    </>
  );
};

export default IncomeAmount;
