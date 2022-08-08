import React, { useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import CashflowItem from "./CashflowItem";
import CreateExpenseForm from "./CreateExpenseForm";
import CreateCashflowForm from "./CreateCashflowForm";
import { Divider } from "@mui/material";
import Remaining from "./Remaining";

function BudgetDashboard({ budget, user }) {
  const [expenses, setExpenses] = useState([]);
  const [budgetId, setBudgetId] = useState("");
  const [expenseId, setExpenseId] = useState("");
  const [budgets, setBudgets] = useState([]);
  const [cashflows, setCashflows] = useState([]);

  useEffect(() => {
    fetch(`/expenses?id=${budget.id}`)
      .then((res) => res.json())
      .then((data) => setExpenses(data));
  }, [budget.id]);

  useEffect(() => {
    fetch(`/cashflows?id=${budget.id}`)
      .then((res) => res.json())
      .then((data) => setCashflows(data));
  }, [budget.id]);

  function addExpense(newExpense) {
    setExpenses([...expenses, newExpense]);
  }

  function addCashflow(newCashflow) {
    setCashflows([...cashflows, newCashflow]);
  }

  // function addCashflow(newCashflow){
  //   setCashflows([...cashflows, newCashflow]);
  // }

  useEffect(() => {
    fetch("/budgets")
      .then((r) => r.json())
      .then(setBudgets);
  }, []);

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
        <Remaining budget={budget} />
      </div>
      <div class="row">
        <div>
          <CreateExpenseForm addExpense={addExpense} budget={budgets} />
        </div>
        <Divider dark />
        <div class="row">
          <CreateCashflowForm addCashflow={addCashflow} user={user} />
        </div>
      </div>
      <div class="col"></div>
    </div>
  );
}

export default BudgetDashboard;
