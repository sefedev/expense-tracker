import { TransactionProvider } from 'context/context';
import DisplayBalance from 'components/DisplayBalance/DisplayBalance';
import TransactionInput from 'components/TransactionInput/TransactionInput';
import Transactions from 'components/Transactions/Transactions';


const App = () => {
  
  return (
    <TransactionProvider>
      <main className="mx-auto px-3 max-w-2xl">
        <DisplayBalance />
        <TransactionInput />
        <Transactions />
      </main>
    </TransactionProvider>
  );
};

export default App;
