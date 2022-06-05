import React, { useContext } from "react";
import { TransactionContext } from "../../store/TransactionContext";


const TransactionDetail = (props) => {
    const { onDeleteTransaction } = useContext(TransactionContext)
    

  return (
    <>
      <li>
        <h4>{props.transactionName}</h4> 
        <p>{props.amount}</p>
        <button>Edit</button>
        <button onClick={() => onDeleteTransaction(props.id)}>Delete</button>
      </li>
    </>
  );
};

export default TransactionDetail;
