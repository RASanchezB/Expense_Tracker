import React, { Component } from "react";
class LogIn extends Component{
    render(){
        return(
            <div>
                <form>
                    <h3>Log In</h3>
                    <div className="form-group mr-sm-2">    
                        <label id="email"> Email</label>
                        <input type="email" className="form-control" id="emailInput" placeholder="Enter Email"/>
                    </div>
                    <div className="form-group">
                        <label id="password">Password</label>
                        <input type="password" className="form-control" id="passwordInput" placeholder="Password"/>
                    </div>
                    <button className="btn btn-primary">Log In</button>
                </form>
            </div>
        )
    }
}
export default LogIn;