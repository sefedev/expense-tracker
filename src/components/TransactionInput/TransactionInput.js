import React, { useContext } from "react";
import { TransactionContext } from "../../store/TransactionContext";
import Modal from "../../UI/Modal/Modal";

const TransactionInput = () => {
  const { open, onOpen, transactionCount } = useContext(TransactionContext);

  
  return (
    <>
      <section>
        <h3>Income/Expense Tracker</h3>
        <p>Showing {transactionCount} transactions</p>
      </section>
      <section>
        <button onClick={() => onOpen(true)}>Add New</button>
      </section>
      {open && <Modal />}
    </>
  );
};

export default TransactionInput;
