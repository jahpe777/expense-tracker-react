import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  const context = useContext(GlobalContext);

  const parseAmounts = context.transactions.map(
    (transaction) => transaction.amount
  );

  const positiveAmounts = parseAmounts.filter((amount) => amount > 0);
  const income = positiveAmounts
    .reduce((acc, element) => element + acc, 0)
    .toFixed(2);

  const negativeAmounts = parseAmounts.filter((amount) => amount < 0);
  const expense = Math.abs(
    negativeAmounts.reduce((acc, element) => element + acc, 0).toFixed(2)
  );

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
