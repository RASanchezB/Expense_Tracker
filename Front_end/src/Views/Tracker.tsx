import React from "react";
import { useState } from "react";

const Tracker = () => {

    
    const [expenseName, setExpenseName] = useState("");
    const [expenseAmount, setExpenseAmount] = useState(NaN);
    const [expenseCategory, setExpenseCategory] = useState("Work Related");
    const [expenseDate, setExpenseDate] = useState("");

    function saveExpense(name: string, amount: number, category: string, date: string) {
        console.log(name);
        console.log(amount);
        console.log(category);
        console.log(date);
        
    }


    return (
        <div id="Content">
            <br/>
            <h2>Tracker </h2>
            <br/>
            <form onSubmit={(event) => {
                event.preventDefault()
                const name = expenseName;
                const amount = expenseAmount;
                const category = expenseCategory;
                const date = expenseDate;
                saveExpense(name, amount, category, date);
            }}>
                <h3>Add an Expense</h3>
                <div className="form-group mr-sm-2">
                    <input
                        id="expenseName"
                        type="text"
                        value={expenseName}
                        onChange={(event)=> {
                            event.preventDefault();
                            setExpenseName(event.target.value)
                        }}
                        className="form-control"
                        placeholder="Put a name to your expense"
                        required
                    />
                </div>
                <div className="form-group mr-sm-2">
                    <input
                        id="expenseAmount"
                        type="number"
                        value={expenseAmount}
                        onChange={(event)=> {
                            event.preventDefault();
                            setExpenseAmount(event.target.valueAsNumber)
                        }}
                        onKeyDown = {(event)=>{(event.key === "e" || event.key === "E") && event.preventDefault()}}
                        className="form-control"
                        placeholder="Amount of money used"
                        required
                    />
                </div>
                <div className="form-group mr-sm-2">
                    <label>Select a category</label>
                    <select
                        id="expenseCategory"
                        className="form-control"
                        placeholder="Category"
                        value={expenseCategory}
                        onChange={(event)=> {
                            event.preventDefault();
                            setExpenseCategory(event.target.value)
                        }}
                        required
                    >
                        <optgroup>
                            <option value="Work">Work Related</option>
                            <option value="Necesities">Necessities</option>
                            <option value="Luxury">Luxury</option>
                            <option value="Other">Other</option>
                        </optgroup>
                    </select>
                </div>
                <div className="form-group mr-sm-2">
                    <label> Date for expense:  </label>
                    <input 
                        type="date" 
                        id="expenseDate" 
                        value={expenseDate}
                        onChange={(event)=> {
                            event.preventDefault();
                            setExpenseDate(event.target.value)
                        }}
                        required    
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save Expense</button>
            </form>
        </div>
    )
}

export default Tracker;


