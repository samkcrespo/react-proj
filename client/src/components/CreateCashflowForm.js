import React from "react";

function CreateCashflowForm({ addCashflow, user }) {
  const [name, setName] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [budgetId, setBudgetId] = React.useState("");
  const [budgets, setBudgets] = React.useState([]);
  const [errors, setErrors] = React.useState([]);
  const [loading, setLoading] = React.useState([]);

  // React.useEffect(() => {
  //   fetch("/budgets")
  //     .then((r) => r.json())
  //     .then(setBudgets);
  // }, []);

  React.useEffect(() => {
    fetch(`/budgets?id=${user.id}`)
      .then((res) => res.json())
      .then((data) => setBudgets(data));
  }, [user.id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      budget_id: budgetId,
      name,
      amount,
    };
    console.log("Submit reached");
    setErrors([]);
    setLoading(true);
    fetch("/cashflows", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((cashflows) => {
        addCashflow(cashflows);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div class="form-floating mb-3">
        <div className="col-3">
          <div>Add Income</div>
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

export default CreateCashflowForm;
