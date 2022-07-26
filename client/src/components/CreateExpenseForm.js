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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit reached");
    setErrors([]);
    setLoading(true);
    fetch("/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        amount,
      }),
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
