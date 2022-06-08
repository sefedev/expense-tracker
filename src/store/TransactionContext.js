import { createContext, useState } from "react";

const TransactionContext = createContext();

const TransactionProvider = (props) => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions(() => [...transactions, transaction]);
  };

  const updateTransaction = (data) => {
    setTransactions([
      ...transactions.filter((transaction) => transaction.id !== data.id),
      data,
    ]);
  };

  const deleteTransaction = (transactionId) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== transactionId)
    );
  };

  return (
    <TransactionContext.Provider
      value={{
        globalState: transactions,
        onAdd: addTransaction,
        onDeleteTransaction: deleteTransaction,
        onUpdate: updateTransaction,
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};

export { TransactionContext, TransactionProvider };
