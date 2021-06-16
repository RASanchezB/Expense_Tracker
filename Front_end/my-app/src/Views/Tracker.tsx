import React, {Component} from "react";

class Tracker extends Component{

    Constructos(){
        expenseName: String;
        expenseAmount: Number;
        expenseCategory: String;
        expenseDate: Date;
    }

    render(){
        return(
            <div id="Content">
                <h2>Add Expense</h2>
                <form onSubmit ={(event) => {
                    event.preventDefault()
                }}>
                    <div className="form-group mr-sm-2">
                        <input 
                            id="expenseName"
                            type="text"
                            className="form-control"
                            placeholder="Put a name to your expense"
                            required
                        />
                    </div>
                    <div className="form-group mr-sm-2">
                        <input
                            id="expenseAmount"
                            type="number"
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
                        <label> Date for expense </label>
                        <input type="date" id="expenseDate"/>
                    </div>
                </form>
            </div>
        )
    }
}