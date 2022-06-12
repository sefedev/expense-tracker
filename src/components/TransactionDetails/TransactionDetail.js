import React, { useContext, useState } from "react";
import { TransactionContext } from "../../store/TransactionContext";
import Modal from "../../UI/Modal/Modal";

const EditTransactionDetail = ({ isEdit, handleSave, transactionData }) => {
  const [data, setData] = useState(transactionData);
  const { onOpenModal } = useContext(TransactionContext);

  const handleChange = (e, key) => {
    setData({
      ...data,
      [key]: e.target.value,
    });
  };


  return (
    <>
      <div className="form-control">
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
      <div className="form-control">
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
          onOpenModal(false);
          handleSave(data);
        }}
      >
        Save
      </button>
      <button
      onClick={() => {
        onOpenModal(false);
        isEdit(false);
      }}
    >
      Cancel
    </button>
    </>
  );
};

const TransactionDetail = (props) => {
  const { onDeleteTransaction, onUpdate, modalType } = useContext(TransactionContext);
  const [editMode, setEditMode] = useState(false);

  const handleSave = (data) => {
    onUpdate(data);
    setEditMode(!editMode);
  };

  return (
    <>
      <li>
        {editMode ? (
          <Modal>
            <EditTransactionDetail
              isEdit={setEditMode}
              handleSave={handleSave}
              transactionData={props}
            />
          </Modal>
        ) : (
          <>
            <h4>{props.transactionName}</h4>
            <p>{props.amount}</p>
            <button onClick={() =>{ 
              console.log(modalType)
              setEditMode(true)}
              }>Edit</button>
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
