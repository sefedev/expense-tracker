import React, { useContext } from "react";
import { TransactionContext } from "../../store/TransactionContext";
import TransactionDetail from "./TransactionDetail";

const TransactionDetails = () => {
  const transactions = useContext(TransactionContext);
  return (
    <>
      <h2>Transaction History</h2>
      <ul>
        {transactions.globalState.map((transaction) => (
          <TransactionDetail
            key={transaction.id}
            transactionName={transaction.transactionName}
            amount={transaction.amount}
            type={transaction.type}
            id={transaction.id}
          />
        ))}
      </ul>
    </>
  );
};

export default TransactionDetails;
