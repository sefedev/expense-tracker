import React, { useContext, useState } from "react";
import { TransactionContext } from "../../store/TransactionContext";

const TransactionForm = (props) => {
  const [newTransaction, setNewTransaction] = useState("");
  const [newAmount, setNewAmount] = useState("");

  // const addTransactionRef= useRef()
  // const addAmountRef = useRef()

  const { onAdd } = useContext(TransactionContext);

  let transaction = {
    id: Math.floor(Math.random() * 1000),
    transactionName: newTransaction,
    amount: +newAmount,
    type: null,
  };

  const transactionHandler = (e) => {
    setNewTransaction(e.target.value);
  };

  const amountHandler = (e) => {
    setNewAmount(e.target.value);
  };

  const addIncomeHandler = (e) => {
    e.preventDefault();
    const newIncome = { ...transaction, type: "income" };
    onAdd(newIncome);
    setNewTransaction('')
    setNewAmount('')
  };

  const addExpenseHandler = (e) => {
    e.preventDefault();
    const newExpense = { ...transaction, type: "expense" };
    onAdd(newExpense);
    setNewTransaction('')
    setNewAmount('')
  };

  //  console.log(addTransactionRef)

  return (
    <form>
      <div className="form_control">
        <label htmlFor="transaction">Add Transaction</label>
        <input
          type="text"
          className="input_class"
          onChange={transactionHandler}
          value={newTransaction}
        />
      </div>
      <div className="form_control">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          className="input_class"
          onChange={amountHandler}
          value={newAmount}
        />
      </div>
      <div className="form_control">
        <button type="submit" onClick={addIncomeHandler}>
          Add Income
        </button>
        <button type="submit" onClick={addExpenseHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default TransactionForm;
