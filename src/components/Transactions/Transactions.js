import { useContext } from "react";
import { TransactionContext } from "context/context";
import Transaction from "../Transaction/Transaction";
import emptyImg from "assets/img/sammy-money-tree-1.png";
import Modal from "components/Modal/Modal";
import TransactionForm from "components/TransactionForm/TransactionForm";
import { PlusIcon } from "@heroicons/react/solid";

const EmptyTransactions = () => {
  return (
    <div className="mt-20">
      <img
        src={emptyImg}
        className="max-w-[15rem] mx-auto"
        alt="Illustration of person watering a money tree"
      />
      <p className="text-center text-gray">
        Looks like you haven’t added any transactions yet.
        <br /> Click the ‘Add’ button to add a transaction.
      </p>
    </div>
  );
};

const Transactions = () => {
  const { globalState, openModal, onOpenModal, transactionCount } =
    useContext(TransactionContext);
  return (
    <section>
      <div className="flex items-center place-content-between">
        <span>
        <p className="text-blue-dark text-xl font-extrabold">Transactions</p>
        <p className="text-gray text-xs">Showing {transactionCount} transactions</p>
        </span>
        <button
          type="button"
          className="text-white bg-blue hover:bg-white hover:text-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 transition ease-in-out delay-150"
          onClick={() => onOpenModal(true)}
        >
          <PlusIcon className="w-4 h-4 mr-2 -ml-1" />
          Add New
        </button>

        {openModal && (
          <Modal>
            <TransactionForm />
          </Modal>
        )}
      </div>

      {globalState.length === 0 && <EmptyTransactions />}
      <ul>
        {globalState.map((transaction) => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </ul>
    </section>
  );
};

export default Transactions;
