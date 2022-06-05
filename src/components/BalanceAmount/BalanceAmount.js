import React, { useContext } from 'react'
import { TransactionContext } from '../../store/TransactionContext'

const BalanceAmount = () => {
    const { income, expense } = useContext(TransactionContext)
  return (
    <>
        <p>Balance Amount:{income-expense}</p>
    </>
  )
}

export default BalanceAmount