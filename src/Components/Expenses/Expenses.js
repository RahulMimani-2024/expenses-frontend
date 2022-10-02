import React, { useState } from "react";
import Card from "../UI/card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import './Expenses.css'
import ExpenseChart from "./ExpenseChart"
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpenseFilter>
        <ExpenseChart items = {filteredExpenses}></ExpenseChart>
        <ExpenseList items={filteredExpenses}></ExpenseList>
      </Card>
    </div>
  );
};

export default Expenses;
