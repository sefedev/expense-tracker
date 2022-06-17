import React, { useContext } from 'react';
import { TransactionContext, TransactionProvider } from 'context/context';
import { Link, useParams } from 'react-router-dom';

const TransactionDetail = () => {
  let params = useParams();
  const { globalState } = useContext(TransactionContext);
  const getDetails = (id) => {
    return globalState.find(
      (transaction) => transaction.id === parseInt(params.id)
    );
  };
  let { transactionName, amount, type } = getDetails(params.id);
  return (
    <TransactionProvider>
      <main className="transactions-container">
        <Link to="/">
          <div>
            <span className="text-sm font-bold text-gray">Go Back</span>
          </div>
        </Link>
        <div className="mb-7">
          <h1>Transaction Details</h1>
        </div>
        <div className="bg-white px-8 py-8 rounded-md space-y-4">
          <div>
            <p className="text-gray text-sm mb-1">Transaction Name</p>
            <p className="font-bold">{transactionName}</p>
          </div>
          <div>
            <p className="text-gray text-sm mb-1">Amount</p>
            <p className="font-bold">{amount}</p>
          </div>
          <div>
            <p className="text-gray text-sm mb-1">Transaction Type</p>
            <p
              className={`font-bold capitalize ${
                type === 'expense' ? 'text-salmon' : 'text-green'
              }`}
            >
              {type}
            </p>
          </div>
        </div>
      </main>
    </TransactionProvider>
  );
};

export default TransactionDetail;
