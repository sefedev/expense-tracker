import { useContext, useState } from 'react';
import { TransactionContext } from 'context/context';

const EditTransactionForm = ({
  handleEditMode,
  transactionId,
  newName,
  newAmount,
  initTransactionAmount,
  initTransactionName,
  handleTransactionChange,
  handleAmountChange,
}) => {
  const { edit } = useContext(TransactionContext);
  const newTransaction = {
    transactionName: newName,
    amount: +newAmount,
  };

  const handleSaveEdit = (newTransaction, transactionId) => {
    edit(newTransaction, transactionId);
    handleEditMode();
  };
  return (
    <div>
      <label>
        Transaction:
        <input
          type="text"
          name="transaction-name"
          placeholder={initTransactionName}
          onChange={handleTransactionChange}
        />
      </label>
      <label>
        Amount:
        <input
          type="text"
          name="transaction-amt"
          placeholder={initTransactionAmount}
          onChange={handleAmountChange}
        />
      </label>
      <button onClick={() => handleSaveEdit(newTransaction, transactionId)}>
        save
      </button>
      <button onClick={() => handleEditMode()}>cancel</button>
    </div>
  );
};

const TransactionItem = ({ transactionName, amount, id, type }) => {
  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState(transactionName);
  const [newAmount, setNewAmount] = useState(amount);
  const { remove } = useContext(TransactionContext);

  const handleEditMode = () => {
    setEditMode(false);
  };

  const handleTransactionChange = (e) => {
    setNewName(e.target.value);
  };

  const handleAmountChange = (e) => {
    setNewAmount(e.target.value);
  };

  return (
    <li>
      {editMode ? (
        <EditTransactionForm
          handleEditMode={handleEditMode}
          transactionId={id}
          initTransactionName={transactionName}
          initTransactionAmount={amount}
          newName={newName}
          newAmount={newAmount}
          handleTransactionChange={handleTransactionChange}
          handleAmountChange={handleAmountChange}
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
