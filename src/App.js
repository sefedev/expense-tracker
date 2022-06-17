import { Outlet } from 'react-router-dom';
import { TransactionProvider } from 'context/context';
import DisplayBalance from 'components/DisplayBalance/DisplayBalance';
import TransactionInput from 'components/TransactionInput/TransactionInput';
import Transactions from 'components/Transactions/Transactions';

function App() {
  return (
    <TransactionProvider>
      <main className="transactions-container">
        <Outlet />
        <DisplayBalance />
        <TransactionInput />
        <Transactions />
      </main>
    </TransactionProvider>
  );
}

export default App;
