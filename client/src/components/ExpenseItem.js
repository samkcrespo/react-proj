import React from "react";
import { TiDelete } from "react-icons/ti";

function ExpenseItem({ name, cost, id }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span>${cost}</span>
        <span className="badge badge-primary badge-pill mr-3">${cost}</span>
        <TiDelete size="1.5em"></TiDelete>
      </div>
    </li>
  );
}

export default ExpenseItem;
