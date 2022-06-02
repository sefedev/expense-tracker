const TransactionList = ({ transactions }) => {
  console.log(transactions);
  return (
    <section>
      <h2>All Transactions</h2>
      <ul>
        {transactions.map(({ transactionName, amount }) => (
          <li>
            {transactionName}-{amount}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TransactionList;
