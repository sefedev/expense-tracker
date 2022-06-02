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

  return (
    <TransactionContext.Provider
      value={{
        state: transactions,
        add: addTransaction,
        remove: removeTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export { TransactionContext, TransactionProvider };
