import { TransactionProvider } from 'context/context';
import DisplayBalance from 'components/DisplayBalance';
import TransactionForm from 'components/TransactionForm';
import Transactions from 'components/Transactions';

function App() {
  return (
    <TransactionProvider>
      <main className="tracker-container">
        <DisplayBalance />
        <TransactionForm />
        <Transactions />
      </main>
    </TransactionProvider>
  );
}

export default App;
