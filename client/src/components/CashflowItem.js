import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

function CashflowItem({ cash }) {
  return (
    <ul class="list-group">
      <li className="list-group-item justify-content-between align-items-center">
        {cash.name}
        <span class="badge badge-success">
          $
          {cash.amount.toLocaleString(navigator.language, {
            minimumFractionDigits: 0,
          })}
        </span>
        <TiDeleteOutline />
      </li>
    </ul>
  );
}

export default CashflowItem;
