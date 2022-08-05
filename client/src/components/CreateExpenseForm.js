import * as React from "react";
import {
  Button,
  TextField,
  Alert,
  Stack,
  Modal,
  Grid,
  Typography,
} from "@mui/material";

function CreateExpenseForm({ addExpense }) {
  const [name, setName] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState([]);
  const [expenses, setExpenses] = React.useState([]);
  const [budgetId, setBudgetId] = React.useState("");
  const [expenseId, setExpenseId] = React.useState("");
  const [budgets, setBudgets] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [categoryId, setCategoryId] = React.useState("");

  React.useEffect(() => {
    fetch(`/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // React.useEffect(() => {
  //   fetch(`/expenses`)
  //     .then((res) => res.json())
  //     .then((data) => setExpenses(data));
  // }, []);

  // function addExpense(newExpense) {
  //   setExpenses([...expenses, newExpense]);
  // }

  React.useEffect(() => {
    fetch("/budgets")
      .then((r) => r.json())
      .then(setBudgets);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      budget_id: budgetId,
      category_id: categoryId,
      name,
      amount,
    };
    console.log("Submit reached");
    setErrors([]);
    setLoading(true);
    fetch("/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((expense) => {
        addExpense(expense);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="form-floating mb-3">
        <div className="col-3">
          <div>Add Expense</div>
          <select
            name="budget_id"
            id="budget_id"
            class="form-control"
            value={budgetId}
            onChange={(e) => setBudgetId(e.target.value)}
          >
            <option value="">Select a Budget</option>
            {budgets.map((budget) => (
              <option key={budget.id} value={budget.id}>
                {budget.name}
              </option>
            ))}
          </select>
          <select
            name="category_id"
            id="category_id"
            class="form-control"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="">Select a Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <label for="floatingInput"></label>
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Name"
            required="required"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
        </div>
        <div className="col-3">
          <label for="floatingInput"></label>
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Amount"
            required="required"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          ></input>
        </div>
        <div className="col-3">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateExpenseForm;
