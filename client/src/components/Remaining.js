import React from "react";

const Remaining = ({ budget }) => {
  return (
    <div class={`alert p-4`}>
      <span>
        Remaining Balance: $
        {budget.total_balance.toLocaleString(navigator.language, {
          minimumFractionDigits: 0,
        })}
      </span>
    </div>
  );
};

export default Remaining;
