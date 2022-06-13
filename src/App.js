import { TransactionProvider } from 'context/context';
import DisplayBalance from 'components/DisplayBalance';
import TransactionInput from 'components/TransactionInput';
import Transactions from 'components/Transactions';

function App() {
  return (
    <TransactionProvider>
      <main className="tracker-container">
        <DisplayBalance />
        <TransactionInput />
        <Transactions />
      </main>
    </TransactionProvider>
  );
}

export default App;
