import { createContext, useEffect, useState } from "react";

const TransactionContext = createContext();

const TransactionProvider = (props) => {
  const [transactions, setTransactions] = useState([]);
  const [openModal, setOpenModal] = useState(false)
  const [modalType, setModalType] = useState()

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

  const transactionCount = transactions.length

  useEffect(() => {
    console.log(transactions)
  }, [transactions])
  

  return (
    <TransactionContext.Provider
      value={{
        globalState: transactions,
        transactionCount: transactionCount,
        onAdd: addTransaction,
        onDeleteTransaction: deleteTransaction,
        onUpdate: updateTransaction,
        openModal: openModal,
        onOpenModal: setOpenModal,
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};

export { TransactionContext, TransactionProvider };
