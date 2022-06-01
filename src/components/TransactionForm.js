const TransactionForm = () => {
  const submitTransaction = (e) => {
    e.preventDefault();
    console.log('firing');
  };

  return (
    <form onSubmit={submitTransaction}>
      <label>
        Transaction:
        <input type="text" name="transaction" />
      </label>
      <label>
        Amount:
        <input type="text" name="transaction" />
      </label>
      <input type="submit" value="Add new transaction" />
    </form>
  );
};

export default TransactionForm;
