import React from "react";
import BalanceAmount from "./components/BalanceAmount/BalanceAmount";
import ExpenseAmount from "./components/ExpenseAmount/ExpenseAmount";
import IncomeAmount from "./components/IncomeAmount/IncomeAmount";
// import ExpenseAmount from "./components/ExpenseAmount/ExpenseAmount";
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
      <BalanceAmount />
      <IncomeAmount />
      <ExpenseAmount />
      <TransactionDetails />
    </TransactionProvider>
  );
};

export default App;
