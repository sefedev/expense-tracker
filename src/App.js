import { TransactionProvider } from 'context/context';
import './App.css';
import Balance from 'components/Balance/Balance';
import TransactionForm from 'components/TransactionForm/TransactionForm';
import TransactionList from 'components/TransactionList/TransactionList';

function App() {
  return (
    <TransactionProvider>
      <div className="tracker-container">
        <h1>Expense Tracker</h1>
        <Balance />
        <TransactionForm />
        <TransactionList />
      </div>
    </TransactionProvider>
  );
}

export default App;
