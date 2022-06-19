import React, { useContext, useState } from "react";
import { TransactionContext } from "context/context";

const TransactionForm = (props) => {
  const [newTransaction, setNewTransaction] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [transactionInput, setTransactionInput] = useState("addIncome");

  const { onAdd, onOpenModal } = useContext(TransactionContext);

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

  const handleRadioChange = (e) => {
    setTransactionInput(e.target.value);
  };

  const transactionSubmitHandler = (e) => {
    e.preventDefault();
    if (transaction.transactionName === '' || transaction.amount === '') {
      onOpenModal(true);
      alert('input a Value')
      
    }
    else if (transactionInput === "addIncome") {
      const newIncome = { ...transaction, type: "income" };
      onAdd(newIncome);
      onOpenModal(false);
    } else {
      const newExpense = { ...transaction, type: "expense" };
      onAdd(newExpense);
      onOpenModal(false);
    }
    setNewTransaction("");
    setNewAmount("");
    
  };

  const cancelHandler = () => {
    setNewTransaction("");
    setNewAmount("");
    onOpenModal(false);
  };

  return (
    <form>
      <div className="text-blue-dark font-extrabold">Add Transaction</div>
      <div className="form_control">
        <label htmlFor="transaction" className="text-gray font-light" required>Add Transaction</label>
        <input
          type="text"
          className="w-full bg-blue-light"
          onChange={transactionHandler}
          value={newTransaction}
        />
      </div>
      <div className="form_control">
        <label htmlFor="amount" required>Amount</label>
        <input
          type="number"
          className="w-full bg-blue-light"
          onChange={amountHandler}
          value={newAmount}
        />
      </div>

      {/* RADIO INPUTS */}
      <div className="form_control">
        <input
          type="radio"
          id="add-income"
          name="transaction"
          checked
          value="addIncome"
          onChange={handleRadioChange}
        />
  

        <label htmlFor="add-income" >Add Income</label>
        <input
          type="radio"
          id="add-expense"
          name="transaction"
          value="addExpense"
          onChange={handleRadioChange}
        />
        <label htmlFor="add-expense">Add Expense</label>
      

      

        <div className="form_control w-full flex px-10 py-4 mx-auto mb-10 shadow-lg rounded-md bg-blue-dark text-white flex-column">
        <button type="submit" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit" onClick={transactionSubmitHandler}>
          Add Transaction
        </button>
        </div>

        {/* END OF RADIO INPUT */}
      </div>
    </form>
  );
};

export default TransactionForm;
