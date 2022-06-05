import { createContext, useState } from 'react';

const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const removeTransaction = (idToDelete) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== idToDelete)
    );
  };

  const editTransaction = (newTransaction, idToEdit) => {
    console.log(newTransaction);
    const updatedTransactions = transactions.map((transaction) => {
      if (transaction.id === idToEdit) {
        transaction.transactionName = newTransaction.transactionName;
        transaction.amount = newTransaction.amount;
      }
      return transaction;
    });
    setTransactions(updatedTransactions);
  };

  return (
    <TransactionContext.Provider
      value={{
        state: transactions,
        add: addTransaction,
        remove: removeTransaction,
        edit: editTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export { TransactionContext, TransactionProvider };
