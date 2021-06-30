import React from "react";
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import {useAuth0} from '@auth0/auth0-react';


const Navbar = () => {
    const {user, loginWithRedirect, logout, isLoading} = useAuth0();
    const logButton = () =>{
        if(isLoading) return <Button><Spinner as="span" animation="grow" aria-hidden="true" /></Button>;
        return user ? (
            <Button variant="secondary" onClick={()=> logout()}>Log Out</Button>
        ):(
            <Button variant="secondary" onClick={()=> loginWithRedirect()}>Log In</Button>
        );
    };
    return(
        <div>
            <NavBar bg="light" fixed="top" expand = "lg">
                <NavBar.Brand href="/home"></NavBar.Brand>
                <NavBar.Toggle aria-controls = "basic-navbar-nav"/>
                <NavBar.Collapse id = "basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/Expenses">New Expenses</Nav.Link>
                        <Nav.Link href="/History">History</Nav.Link>
                        <Nav.Link>{logButton()}</Nav.Link>
                    </Nav>
                </NavBar.Collapse>
                
            </NavBar>
        </div>
    )
}
export default Navbar;