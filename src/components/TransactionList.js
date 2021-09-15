import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
  const context = useContext(GlobalContext);
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {context.transactions.map((transaction) => {
          const { id, text, amount } = transaction;
          const sign = amount > 0 ? '+' : '-';
          return (
            <li key={id} className={sign === '+' ? 'plus' : 'minus'}>
              {text}{' '}
              <span>
                {sign}${Math.abs(amount)}
              </span>
              <button
                className="delete-btn"
                onClick={() => deleteTransaction(id)}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TransactionList;
