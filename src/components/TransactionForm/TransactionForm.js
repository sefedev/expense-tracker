import React, { useState } from 'react';

const TransactionForm = ({ onHandleTransactions }) => {
  const [transaction, setTransaction] = useState('');
  const [amount, setAmount] = useState('');

  let newTransaction = {
    transactionName: transaction,
    amount: +amount, // uses unary operator to set as num and not string
    type: null,
  };

  const handleTransactionName = (e) => {
    setTransaction(e.target.value);
  };
  const handleTransactionAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    const newExpense = { ...newTransaction, type: 'expense' };
    onHandleTransactions(newExpense);
  };

  const handleAddIncome = (e) => {
    e.preventDefault();
    const newIncome = { ...newTransaction, type: 'income' };
    onHandleTransactions(newIncome);
  };

  return (
    <div>
      <label>
        Transaction:
        <input
          type="text"
          name="transaction-name"
          value={transaction}
          onChange={handleTransactionName}
        />
      </label>
      <label>
        Amount:
        <input
          type="text"
          name="transaction-amt"
          value={amount}
          onChange={handleTransactionAmount}
        />
      </label>
      <button type="submit" onClick={handleAddIncome}>
        Add Income
      </button>
      <button type="submit" onClick={handleAddExpense}>
        Add Expense
      </button>
    </div>
  );
};

export default TransactionForm;
