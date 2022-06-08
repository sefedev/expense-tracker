import React from "react";
import DisplayAmount from "./components/DisplayAmount/DisplayAmount";
import InputTransaction from "./components/InputTransaction/InputTransaction";
import TransactionDetails from "./components/TransactionDetails/TransactionDetails";
import { TransactionProvider } from "./store/TransactionContext";

const App = (props) => {
  return (
    <TransactionProvider>
      <header>
        <h1>Income/Expense Tracker</h1>
      </header>
      <InputTransaction />
      <DisplayAmount />
      <TransactionDetails />
    </TransactionProvider>
  );
};

export default App;
