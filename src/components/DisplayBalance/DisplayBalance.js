import { CheckCircleIcon } from "@heroicons/react/solid";
import { TransactionContext } from "context/context";
import { useContext } from "react";

const DisplayBalance = () => {
  const { globalState } = useContext(TransactionContext);
  const totalIncome = globalState
    .filter((transaction) => transaction.type === "income")
    .reduce((accumulator, { amount }) => accumulator + amount, 0);

  const totalExpense = globalState
    .filter((transaction) => transaction.type === "expense")
    .reduce((accumulator, { amount }) => accumulator + amount, 0);

  return (
    <section className="w-full flex px-10 py-4 mx-auto mb-10 shadow-lg rounded-md bg-blue-dark text-white flex-column">
      <div className="flex-auto w-64">
        <h3 className="text-blue-gray"> Total Balance </h3>
        <p className="font-bold">{totalIncome - totalExpense}</p>
      </div>
      <div className="flex-auto w-32">
        <div className="text-blue-gray">
          <CheckCircleIcon className="w-3 h-3 bg-green text-green rounded-lg" />
          Income
        </div>
        <p className="font-bold">{totalIncome}</p>
      </div>
      <div className="flex-auto w-32">
        <div className="text-blue-gray">
          <CheckCircleIcon className="w-3 h-3 bg-red text-red rounded-lg" />
          Expenses
        </div>
        <p className="font-bold">{totalExpense}</p>
      </div>
    </section>
  );
};

export default DisplayBalance;
