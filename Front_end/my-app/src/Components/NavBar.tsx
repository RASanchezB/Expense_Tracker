import React, {Component} from "react";
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import {useAuth0} from '@auth0/auth0-react';

const {user, loginWithRedirect, logout, isLoading} = useAuth0();
class Navbar extends Component{

    logButton = () =>{
        if(isLoading) return <Button><Spinner as="span" animation="grow" aria-hidden="true" /></Button>;
        return user ? (
            <Button variant="secondary" onClick={()=> logout()}>Log Out</Button>
        ):(
            <Button variant="secondary" onClick={()=> loginWithRedirect()}>Log In</Button>
        )
    }

    render(){
        return(
            <div>
                <NavBar bg="dark" variant="dark" fixed="top">
                    <NavBar.Brand href="/home"></NavBar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/Expenses">New Expenses</Nav.Link>
                        <Nav.Link href="/History">History</Nav.Link>
                        <Nav.Link>{this.logButton()}</Nav.Link>
                    </Nav>
                </NavBar>
            </div>
        )
    }
}
export default Navbar;