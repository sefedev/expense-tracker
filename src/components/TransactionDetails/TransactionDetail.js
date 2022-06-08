import React, { useContext, useState } from "react";
import { TransactionContext } from "../../store/TransactionContext";

const EditTransactionDetail = ({ isEdit, handleSave, transactionData }) => {
  const [data, setData] = useState(transactionData);

  const handleChange = (e, key) => {
    setData({
      ...data,
      [key]: e.target.value,
    });
  };

  return (
    <>
      <div class="form-control">
        <label>Edit Transaction</label>
        <input
          type="text"
          name="transaction-name"
          value={data.transactionName}
          onChange={(e) => {
            handleChange(e, "transactionName");
          }}
        />
      </div>
      <div class="form-control">
        <label>Edit Amount</label>
        <input
          type="number"
          name="amount"
          value={data.amount}
          onChange={(e) => {
            handleChange(e, "amount");
          }}
        />
      </div>
      <button
        onClick={() => {
          handleSave(data);
        }}
      >
        Save
      </button>
      <button>Cancel</button>
    </>
  );
};

const TransactionDetail = (props) => {
  const { onDeleteTransaction, onUpdate } = useContext(TransactionContext);
  const [editMode, setEditMode] = useState(false);

  const handleSave = (data) => {
    onUpdate(data);
    setEditMode(!editMode);
  };

  return (
    <>
      <li>
        {editMode ? (
          <EditTransactionDetail
            isEdit={editMode}
            handleSave={handleSave}
            transactionData={props}
          />
        ) : (
          <>
            <h4>{props.transactionName}</h4>
            <p>{props.amount}</p>
            <button onClick={() => setEditMode(true)}>Edit</button>
            <button onClick={() => onDeleteTransaction(props.id)}>
              Delete
            </button>
          </>
        )}
      </li>
    </>
  );
};

export default TransactionDetail;
