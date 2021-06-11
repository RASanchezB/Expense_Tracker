import React, {Component} from "react";
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';

class Navbar extends Component{
    render(){
        return(
            <div>
                <NavBar bg="dark" variant="dark" fixed="top">
                    <NavBar.Brand href="/home"></NavBar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/Expenses">New Expenses</Nav.Link>
                        <Nav.Link href="/History">History</Nav.Link>
                        <Nav.Link href="/user">User</Nav.Link>
                    </Nav>
                </NavBar>
            </div>
        )
    }
}
export default Navbar;