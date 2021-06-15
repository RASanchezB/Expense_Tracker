import React, {Component} from "react";

class Tracker extends Component{

    Constructos(){
        expenseName: String;

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
                    
                </form>
            </div>
        )
    }
}