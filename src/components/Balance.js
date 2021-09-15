import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const context = useContext(GlobalContext);

  const amounts = context.transactions.map((transaction) => {
    return transaction.amount;
  });

  const total = amounts.reduce((acc, element) => element + acc, 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};

export default Balance;
