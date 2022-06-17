import { Outlet } from 'react-router-dom';
import DisplayBalance from 'components/DisplayBalance/DisplayBalance';
import TransactionInput from 'components/TransactionInput/TransactionInput';
import Transactions from 'components/Transactions/Transactions';

function App() {
  return (
    <main className="transactions-container">
      <Outlet />
      <DisplayBalance />
      <TransactionInput />
      <Transactions />
    </main>
  );
}

export default App;
