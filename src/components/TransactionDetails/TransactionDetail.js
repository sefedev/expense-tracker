import React, { useContext, useState } from "react";
import { TransactionContext } from "../../store/TransactionContext";

const EditTransactionDetail = ({ isEdit, handleEditMode, transactionData }) => {
  return (
    <>
      <div class="form-control">
        <label>Edit Transaction</label>
        <input
          type="text"
          name="transaction-name"
          value={transactionData.transactionName}
        />
      </div>
      <div class="form-control">
        <label>Edit Amount</label>
        <input type="number" name="amount" value={transactionData.amount} />
      </div>
      <button>Save</button>
      <button>Cancel</button>
    </>
  );
};

const TransactionDetail = ({ id, transactionName, amount, type }) => {
  const { editMode, setEditMode } = useState(false);
  const { initData, setInitData } = useState();

  const { onDeleteTransaction } = useContext(TransactionContext);

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

  return (
    <>
      <li>
        {editMode ? (
          <EditTransactionDetail
            isEdit={editMode}
            handleEditMode={handleEditMode}
            transactionData={initData}
          />
        ) : (
          <>
            <h4>{transactionName}</h4>
            <p>{amount}</p>
            <button onClick={() => setEditMode(true)}>Edit</button>
            <button onClick={() => onDeleteTransaction(id)}>Delete</button>
          </>
        )}
      </li>
    </>
  );
};

export default TransactionDetail;
