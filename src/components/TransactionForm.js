import React, { useState } from 'react';

const TransactionForm = () => {
  const [transaction, setTransaction] = useState('');
  const [amount, setAmount] = useState();

  let newTransaction = {
    transactionName: transaction,
    amount: +amount,
  };

  const handleTransactionName = (e) => {
    setTransaction(e.target.value);
  };
  const handleTransactionAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    console.log('add expense');
    console.log('new transaction', newTransaction);
  };

  const handleAddIncome = (e) => {
    e.preventDefault();
    console.log('add income');
    console.log('new transaction', newTransaction);
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
