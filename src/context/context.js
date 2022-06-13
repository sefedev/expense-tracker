import { createContext, useState } from 'react';

const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState();

  const addTransaction = (transaction) => {
    setTransactions(() => [...transactions, transaction]);
  };

  const deleteTransaction = (idToDelete) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== idToDelete)
    );
  };

  const updateTransaction = (data) => {
    setTransactions([
      ...transactions.filter((transaction) => transaction.id !== data.id),
      data,
    ]);
  };

  return (
    <TransactionContext.Provider
      value={{
        globalState: transactions,
        // transactionCount: transactionCount,
        onAdd: addTransaction,
        onDelete: deleteTransaction,
        onUpdate: updateTransaction,
        openModal: openModal,
        onOpenModal: setOpenModal,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export { TransactionContext, TransactionProvider };
