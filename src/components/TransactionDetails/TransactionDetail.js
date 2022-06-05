import React from "react";

const TransactionDetail = ({transactionName, amount}) => {
    console.log(transactionName, amount)
  return (
    <>
      <li>
        {transactionName} {amount}
      </li>
    </>
  );
};

export default TransactionDetail;
