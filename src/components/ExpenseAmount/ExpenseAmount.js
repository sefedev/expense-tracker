import React, { useContext } from 'react'
import { TransactionContext } from '../../store/TransactionContext'

const ExpenseAmount = () => {
  const { globalState, setExpenseAmount} = useContext(TransactionContext)
  const expenseAmount = globalState
  .filter(transaction => transaction.type === 'expense')
  .map(transaction => transaction.amount)
  .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  setExpenseAmount(expenseAmount)
  return (
    <>
        <p>Expense Amount:{expenseAmount}</p>
    </>
  )
}

export default ExpenseAmount