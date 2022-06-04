import { useContext, useState } from 'react';
import { TransactionContext } from '../../context/context';

const EditTransactionForm = ({ isEdit, handleEditMode, transactionData }) => {
  console.log(transactionData);
  let { transactionName, amount } = transactionData;
  return (
    <div>
      <label>
        Transaction:
        <input type="text" name="transaction-name" value={transactionName} />
      </label>
      <label>
        Amount:
        <input type="text" name="transaction-amt" value={amount} />
      </label>
      <button>save</button>
      <button onClick={() => handleEditMode()}>cancel</button>
    </div>
  );
};

const TransactionItem = ({ transactionName, amount, id, type }) => {
  const [editMode, setEditMode] = useState(false);
  const [initData, setInitData] = useState();
  const { remove } = useContext(TransactionContext);

  const handleEditMode = () => {
    const initTransaction = {
      id: id,
      transactionName: transactionName,
      amount: +amount,
      type: type,
    };

    setEditMode(false);
    setInitData(initTransaction);
  };

  console.log(editMode);
  return (
    <li>
      {editMode ? (
        <EditTransactionForm
          isEdit={editMode}
          handleEditMode={handleEditMode}
          transactionData={initData}
        />
      ) : (
        <>
          <span>
            {transactionName} {amount}
          </span>
          <button onClick={() => setEditMode(true)}>edit</button>
          <button onClick={() => remove(id)}>delete</button>
        </>
      )}
    </li>
  );
};

export default TransactionItem;
