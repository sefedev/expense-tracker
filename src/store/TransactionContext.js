import { createContext, useState } from "react";

const TransactionContext = createContext();

const TransactionProvider = (props) => {
  const [transactions, setTransactions] = useState([]);
  const [income, setIncome] = useState();
  const [expense, setExpense] = useState()

  const addTransaction = (transaction) => {
    setTransactions(() => [...transactions, transaction]);
  };

  const deleteTransaction = (transactionId) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== transactionId)
    );
  };

  const totalIncomeAmount = (income) => {
    setIncome(income)
  }

  const totalExpenseAmount = (expense) => {
    setExpense(expense)
  }

  return (
    <TransactionContext.Provider
      value={{
        globalState: transactions,
        onAdd: addTransaction,
        onDeleteTransaction: deleteTransaction,
        setIncomeAmount:totalIncomeAmount,
        setExpenseAmount: totalExpenseAmount,
        income: income,
        expense: expense
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};

export { TransactionContext, TransactionProvider };
