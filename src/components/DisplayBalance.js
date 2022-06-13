import { TransactionContext } from 'context/context';
import { useContext } from 'react';

const DisplayBalance = () => {
  const { globalState } = useContext(TransactionContext);
  const totalIncome = globalState
    .filter((transaction) => transaction.type === 'income')
    .reduce((accumulator, { amount }) => accumulator + amount, 0);

  const totalExpense = globalState
    .filter((transaction) => transaction.type === 'expense')
    .reduce((accumulator, { amount }) => accumulator + amount, 0);

  return (
    <section>
      <div>Balance: {totalIncome - totalExpense}</div>
      <div>Total Income: {totalIncome}</div>
      <div>Total Expenses: {totalExpense}</div>
    </section>
  );
};

export default DisplayBalance;
