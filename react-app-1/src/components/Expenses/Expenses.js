import { useState } from "react";
import "../../styles/Expenses/Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart.js";

const Expenses = (props) => {
  const expenses = props.expenses;
  const classes = "expenses " + props.className;

  const [expenseFilter, setExpenseFilter] = useState("2020");

  const ExpenseFilterChangeHandler = (filter) => {
    setExpenseFilter(filter);
  };

  const filteredExpenses = expenses.filter((item) => {
    return item.date.getFullYear().toString() === expenseFilter;
  });

  return (
    <Card className={classes}>
      <ExpensesFilter
        onExpenseFilterChange={ExpenseFilterChangeHandler}
        selected={expenseFilter}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
