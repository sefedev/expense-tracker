import { useContext } from 'react';
import { TransactionContext } from '../../context/context';
import TransactionItem from '../TransactionItem/TransactionItem';

const TransactionList = () => {
  const transactions = useContext(TransactionContext);
  console.log(transactions.state);
  return (
    <section>
      <h2>All Transactions</h2>
      <ul>
        {transactions.state.map((transaction) => (
          <TransactionItem key={transaction.id} {...transaction} />
        ))}
      </ul>
    </section>
  );
};

export default TransactionList;
