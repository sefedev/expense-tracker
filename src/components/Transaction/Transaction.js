import React, { useContext, useState } from 'react';
import { TransactionContext } from 'context/context';
import { ChevronRightIcon } from '@heroicons/react/solid';

const Transaction = ({ transactionName, amount }) => {
  return (
    <li className="px-6 py-4 bg-white rounded-md list-none flex items-center place-content-between mb-2 cursor-pointer">
      <p className="font-bold text-blue-dark">{transactionName}</p>
      <span className="flex items-center">
        <p className="text-gray mr-4">{amount}</p>
        <ChevronRightIcon className="h-5 w-5 text-blue" />
      </span>
    </li>
  );
};

export default Transaction;
