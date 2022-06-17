import React from 'react';
import { useParams } from 'react-router-dom';

const TransactionDetail = () => {
  let params = useParams();
  return <h2>Transaction Name</h2>;
};

export default TransactionDetail;
