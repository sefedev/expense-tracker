import { TransactionProvider } from 'context/context';
import DisplayBalance from 'components/DisplayBalance/DisplayBalance';
import Transactions from 'components/Transactions/Transactions';

function App() {
  return (
    <TransactionProvider>
      <main className="mx-auto px-3 max-w-2xl">
        <DisplayBalance />
        <Transactions />
      </main>
    </TransactionProvider>
  );
}

export default App;

