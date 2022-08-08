import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

function ExpenseItem({ expense }) {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <ul class="list-group">
      <li className="list-group-item align-items-left">
        {expense.name}
        <span class="badge badge-error">
          $
          {expense.amount.toLocaleString(navigator.language, {
            minimumFractionDigits: 0,
          })}
        </span>
        <span>
          <label>
            Paid
            <input type="checkbox" checked={checked} onChange={handleChange} />
          </label>
        </span>
      </li>
    </ul>
  );
}

export default ExpenseItem;
