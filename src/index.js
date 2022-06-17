import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TransactionProvider } from 'context/context';
import TransactionDetail from 'routes/transactionDetail';
import 'styles/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TransactionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/transactions/:id" element={<TransactionDetail />} />
        </Routes>
      </BrowserRouter>
    </TransactionProvider>
  </React.StrictMode>
);
