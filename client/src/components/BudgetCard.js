import React, { useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import CashflowItem from "./CashflowItem";
import CreateExpenseForm from "./CreateExpenseForm";
import CreateCashflowForm from "./CreateCashflowForm";
import { Divider } from "@mui/material";

function BudgetCard({ budget, user }) {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch(`/expenses/`)
      .then((res) => res.json())
      .then((data) => setExpenses(data));
  }, []);

  function addExpense(newExpense) {
    setExpenses([...expenses, newExpense]);
  }

  return (
    <div>
      {budget.name}
      <div className="alert alert-primary">
        <div class="col">
          Income
          {budget.cashflows.map((cash) => {
            return <CashflowItem key={cash.id} cash={cash} />;
          })}
        </div>
        <div>Expenses</div>
        <div class="col">
          {budget.expenses.map((expense) => {
            return <ExpenseItem key={expense.id} expense={expense} />;
          })}
        </div>
        Remaining: $
        {budget.total_balance.toLocaleString(navigator.language, {
          minimumFractionDigits: 0,
        })}
        {/* {addNumbers(budget.cashflows.amount - budget.expenses.amount)} */}
      </div>
      <div class="row">
        <div>
          <CreateExpenseForm addExpense={addExpense} />
        </div>
        <Divider dark />
        <div class="row">
          <CreateCashflowForm />
        </div>
      </div>
      <div class="col"></div>
    </div>
  );
}

export default BudgetCard;
