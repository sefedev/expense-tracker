import { useContext } from 'react';
import { TransactionContext } from '../../context/context';

const TransactionItem = ({ transactionName, amount, id }) => {
  const { remove } = useContext(TransactionContext);
  return (
    <li>
      <span>
        {transactionName} {amount}
      </span>
      <button onClick={() => remove(id)}>delete</button>
    </li>
  );
};

export default TransactionItem;
