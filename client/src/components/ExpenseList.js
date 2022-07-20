import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList() {
  const expenses = [
    {
      id: 1,
      name: "Shopping",
      cost: 211,
    },
    {
      id: 2,
      name: "Mortgage/Rent",
      cost: 1200,
    },
    {
      id: 3,
      name: "Fuel",
      cost: 100,
    },
    {
      id: 4,
      name: "Food",
      cost: 200,
    },
  ];

  return (
    <div>
      <ul className="list-group">
        {expenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
