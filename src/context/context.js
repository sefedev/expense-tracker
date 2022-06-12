import { createContext, useState } from 'react';

const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions(() => [...transactions, newTransaction]);
    console.log(transactions);
  };

  const removeTransaction = (idToDelete) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== idToDelete)
    );
  };

  const editTransaction = (newTransaction, idToEdit) => {
    const updatedTransactions = transactions.map((transaction) => {
      if (transaction.id === idToEdit) {
        transaction.transactionName = newTransaction.transactionName;
        transaction.amount = newTransaction.amount;
      }
      return transaction;
    });
    setTransactions(() => updatedTransactions);
    console.log('updated', transactions);
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
