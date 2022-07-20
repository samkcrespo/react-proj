import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import "./index.css";
import ExpenseList from "./components/ExpenseList";
import CreateExpenseForm from "./components/CreateExpenseForm";
import logo1 from "./6.png";
import logo2 from "./logotransparent.png";
const App = () => {
  return (
    <div className="container">
      <h1 className="mt-3">
        <img src={logo1} alt="budgetmgr logo" width="500px" />
      </h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <ExpenseTotal />
        </div>
      </div>
      <h3 className="mt-3">Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList />
        </div>
      </div>
      <h3 className="mt-3">Add Expense</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <CreateExpenseForm />
        </div>
      </div>
    </div>
  );
};

export default App;
