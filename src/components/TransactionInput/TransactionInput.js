import React, { useContext } from "react";
import { TransactionContext } from "../../store/TransactionContext";
import Modal from "../../UI/Modal/Modal";
import TransactionForm from '../TransactionForm/TransactionForm'

const TransactionInput = () => {
  const { openModal, onOpenModal, transactionCount } = useContext(TransactionContext);
  
  return (
    <>
      <section>
        <p>Showing {transactionCount} transactions</p>
      </section>
      <section>
        <button onClick={() => onOpenModal(true)}>Add New</button>
      </section>
      {openModal && <Modal><TransactionForm /></Modal>}
    </>
  );
};

export default TransactionInput;
