import React from "react";

function CreateCashflowForm() {
  const [name, setName] = React.useState("");
  const [amount, setAmount] = React.useState("");
  return (
    <form>
      <div class="form-floating mb-3">
        <div className="col-3">
          <div>Add Income</div>
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
