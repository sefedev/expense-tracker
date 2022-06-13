import { useContext } from 'react';
import { TransactionContext } from 'context/context';
import Transaction from './Transaction';

const Transactions = () => {
  const { globalState } = useContext(TransactionContext);
  return (
    <section>
      <h2>Transactions</h2>
      {globalState.length === 0 && <p>No transactions to Show!</p>}
      <ul>
        {globalState.map((transaction) => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </ul>
    </section>
  );
};

export default Transactions;
