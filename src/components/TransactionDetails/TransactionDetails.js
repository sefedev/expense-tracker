import React, { useContext } from "react";
import { TransactionContext } from "../../store/TransactionContext";
import TransactionDetail from "./TransactionDetail";

const TransactionDetails = () => {
  const transactions = useContext(TransactionContext);
  console.log()
  return (
    <>
    <h2>Transaction History</h2>
    <ul>
      {transactions.globalState.map((transaction) => (
        <TransactionDetail
          key={transaction.id}
          transactionName={transaction.newTransaction}
          amount={transaction.newAmount}
          type={transaction.type}
        />
      ))}
      </ul>
    </>
  );
};

export default TransactionDetails;
