import { createContext, useState } from "react";

const TransactionContext = createContext();

const TransactionProvider = (props) => {
  const [transactions, setTransactions] = useState([]);

  const addTransactions = (transaction) => {
    setTransactions(() =>[...transactions, transaction]);
  };

  return (
    <TransactionContext.Provider
      value={{ globalState: transactions, onAdd: addTransactions }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};

export { TransactionContext, TransactionProvider };
