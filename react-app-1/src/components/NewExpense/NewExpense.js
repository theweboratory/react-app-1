import { useState } from "react";
import "../../styles/NewExpense/NewExpense.css";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [activeForm, setActiveForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const addNewExpenseHandler = (e) => {
    setActiveForm(true);
  };

  const cancelNewExpenseHandler = (e) => {
    setActiveForm(false);
  };

  if (!activeForm) {
    return (
      <Card className="new-expense">
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      </Card>
    );
  }

  return (
    <Card className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancelClick={cancelNewExpenseHandler}
        activeForm={activeForm}
      />
    </Card>
  );
};

export default NewExpense;
