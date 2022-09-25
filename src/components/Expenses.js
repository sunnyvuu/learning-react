import ExpenseItem from "./ExpenseItem";
import ExpensesData from "./ExpensesData";
import './Expenses.css'; 

function Expenses() {
    return (
        <div className="expenses">
            <ExpenseItem
                title={ExpensesData[0].title}
                amount={ExpensesData[0].amount}
                date={ExpensesData[0].date}
            ></ExpenseItem>

            <ExpenseItem
                title={ExpensesData[1].title}
                amount={ExpensesData[1].amount}
                date={ExpensesData[1].date}
            ></ExpenseItem>

            <ExpenseItem
                title={ExpensesData[2].title}
                amount={ExpensesData[2].amount}
                date={ExpensesData[2].date}
            ></ExpenseItem>

            <ExpenseItem
                title={ExpensesData[3].title}
                amount={ExpensesData[3].amount}
                date={ExpensesData[3].date}
            ></ExpenseItem>
        </div>
    )
}

export default Expenses;