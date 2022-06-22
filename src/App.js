import DisplayBalance from 'components/DisplayBalance/DisplayBalance';
import Transactions from 'components/Transactions/Transactions';

function App() {
  return (
      <main className="mx-auto px-3 max-w-2xl">
        <DisplayBalance />
        <Transactions />
      </main>
  );
}

export default App;

