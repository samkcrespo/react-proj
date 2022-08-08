import React, { useEffect, useState } from "react";
import BudgetDashboard from "./BudgetDashboard";
import CreateExpenseForm from "./CreateExpenseForm";
import ExpenseTotal from "./ExpenseTotal";

function BudgetContainer({ user, expenses }) {
  const [budgets, setBudgets] = useState([]);

  console.log({ user });
  // function showBudgets() {
  //   setBudgets(user.budgets ? user.budgets : []);
  // }

  useEffect(() => {
    fetch(`/budgets?id=${user.id}`)
      .then((res) => res.json())
      .then(setBudgets);
  }, [user.id]);

  return (
    <div className="alert alert-primary">
      <div class="container text-center">
        <div class="row">
          <h5>My Budgets</h5>

          {budgets.map((budget) => (
            <BudgetDashboard
              budget={budget}
              key={`budget-${budget.id}`}
              user={user}
            />
          ))}

          {/* <h4 component="p" variant="subtitle1" align="center" paddingTop>
              You don't have any budgets right now
            </h4> */}
        </div>
      </div>
    </div>
  );
}

export default BudgetContainer;
