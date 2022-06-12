import React from "react";
import DisplayAmount from "./components/DisplayAmount/DisplayAmount";
import TransactionInput from "./components/TransactionInput/TransactionInput";
import TransactionDetails from "./components/TransactionDetails/TransactionDetails";
import { TransactionProvider } from "./store/TransactionContext";


const App = () => {
  
  return (
    <TransactionProvider>
      <DisplayAmount />
      <TransactionInput />
      <TransactionDetails />
    </TransactionProvider>
    
  );
};

export default App;
