import './App.css';
import Balance from './components/Balance';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <div className="tracker-container">
      <h1>Expense Tracker</h1>
      <Balance />
      <TransactionForm />
      <TransactionList />
    </div>
  );
}

export default App;
