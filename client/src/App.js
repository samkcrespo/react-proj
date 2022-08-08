import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BudgetContainer from "./components/BudgetContainer";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import "./index.css";
import CreateExpenseForm from "./components/CreateExpenseForm";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Home from "./components/Home";
import logo1 from "./6.png";
import logo2 from "./logotransparent.png";
import NavBar from "./components/NavBar";
import theme from "./theme";
import UserAccount from "./components/UserAccount";
import CreateCashflowForm from "./components/CreateCashflowForm";
import CreateBudgetForm from "./components/CreateBudgetForm";
import { CircularProgress, Backdrop } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Routes, useNavigate } from "react-router-dom";

const App = () => {
  const appliedTheme = createTheme(theme);
  const [sessionCheck, setSessionCheck] = useState(false);
  const [budgets, setBudgets] = useState([]);
  const [user, setUser] = useState(useState({ user: null }));
  const navigate = useNavigate();
  const [expenses, setExpenses] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  // React.useEffect(() => {
  //   fetch("/expenses", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((r) => r.json())
  //     .then(setExpenses);
  // }, []);

  useEffect(() => {
    // auto-login
    handleCheckUser();
  }, []);

  function handleCheckUser() {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user);
        });
      } else {
        response.json().then((err) => console.log(err));
      }
    });
    setSessionCheck(true);
  }

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setUser(null);
      }
    });
  }

  // useEffect(() => {
  //   fetch("/budgets").then((response) => {
  //     if (response.ok) {
  //       response.json().then((budget) => {
  //         setBudgets(budget);
  //       });
  //     } else {
  //       response.json().then((err) => console.log(err));
  //     }
  //   });
  // }, []);
  // useEffect(() => {
  //   fetch(`/budgets`)
  //     .then((res) => res.json())
  //     .then(setBudgets);
  // }, []);

  if (sessionCheck) {
    return (
      <ThemeProvider theme={appliedTheme}>
        <div id="page-container">
          <div id="content-wrap">
            <div>
              <NavBar
                user={user}
                setUser={setUser}
                handleLogout={handleLogout}
              />
              <div className="container">
                <h1 className="mt-3">
                  {/* <img src={logo1} alt="budgetmgr logo" width="500px" /> */}
                </h1>
                <div className="row mt-3">
                  <div className="col-sm">{/* <Budget /> */}</div>
                  <div className="col-sm">{/* <Remaining /> */}</div>
                  <div className="col-sm">{/* <ExpenseTotal /> */}</div>
                </div>
                {/* <h3 className="mt-3">Expenses</h3> */}
                <div className="row mt-3">
                  <div className="col-sm">{/* <ExpenseList /> */}</div>
                </div>
                {/* <h3 className="mt-3">Add Expense</h3> */}
                <div className="row mt-3">
                  <div className="col-sm">{/* <CreateExpenseForm /> */}</div>
                </div>
                <Routes>
                  <Route
                    index
                    exact
                    path="/"
                    element={
                      <Home
                      // handleListSearch={handleListSearch}
                      // recommendationLists={recommendationLists}
                      />
                    }
                  />
                  <Route
                    path="signup"
                    element={<Signup onLogin={setUser} user={user} />}
                  />
                  <Route
                    path="login"
                    element={<Login onLogin={setUser} user={user} />}
                  />
                  <Route
                    path="myaccount"
                    element={<UserAccount onLogin={setUser} user={user} />}
                  />
                  <Route
                    path="dashboard"
                    element={
                      <BudgetContainer
                        user={user}
                        handleCheckUser={handleCheckUser}
                        expenses={expenses}
                        budgets={budgets}
                      />
                    }
                  />
                  <Route path="my_budgets/new" element={<CreateBudgetForm />} />
                  <Route path="expense/new" element={<CreateExpenseForm />} />
                  <Route
                    path="cashflows/new"
                    element={<CreateCashflowForm />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </ThemeProvider>
    );
  } else {
    return (
      <div>
        <ThemeProvider theme={appliedTheme} />
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="primary" />
          <p>Loading...</p>
        </Backdrop>
        <ThemeProvider />
      </div>
    );
  }
};
// } else {
//   return (
//     <div>
//       {/* <ThemeProvider theme={appliedTheme} />

//         <Header user={user} setUser={setUser} handleLogout={handleLogout} />
//         <CircularProgress color="secondary" /> */}
//       <p>Loading...</p>
//     </div>
//   );
// }

export default App;
