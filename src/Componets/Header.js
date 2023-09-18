import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { modal } from "../Fetures/Blogerslice";
import { useHistory } from "react-router-dom";

function ColorSchemesExample(props) {
    const history =useHistory()
    
    const [mode, setMode] = useState("light");
    const Setmodal=useSelector((state)=>state.Bloger.Modal)
    const dispatch = useDispatch();
    const userModal=()=>{
        console.log("hello");
        dispatch(modal(true))
    }
   
   
    const changeMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }
    };
    const token=localStorage.getItem("UserloginToken")
    const UesrLogout=()=>{
        localStorage.removeItem("UserloginToken")
       history.push('/signin')
       window.location.reload()
    }
    const UesrLogin=()=>{
       history.push('/signin')

    }
    return (
        <>
            <Navbar bg={mode} data-bs-theme={mode}>
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        
                        <Nav.Link as={Link} to="/newaccount">
                            Create Account
                        </Nav.Link>
                     
                        <Nav.Link as={Link} to="/about">
                            About
                        </Nav.Link>
                    
                     {
                        token&&<Button className="ms-2" onClick={userModal}>Create Blog</Button>
                     }
                    </Nav>
                    <div>

                        <Button onClick={() => changeMode()}>{mode}</Button>

                        <Link as={Link} to="/admin/login"><Button className="ms-2">Admin</Button></Link>
                        {token&&<Button className="ms-2" onClick={UesrLogout}>Log Out</Button>}
                        {token ?"": <Button className="ms-2" onClick={()=>history.push('/signin')}>Log in</Button>}
                    </div>
                   
                </Container>
            </Navbar>
           
        </>
    );
}

export default ColorSchemesExample;
