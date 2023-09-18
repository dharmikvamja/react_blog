import React, { useState,useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
function Login() {
  const history = useHistory();

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState();
    const validationError = {};

    const formData = { username: email, password: pass };
    const  handleSubmit = async (e) => {
        e.preventDefault(); // Prevents default form submission

        try{
           const response = await axios.post('http://localhost:3001/admin/login', formData)
            // .then((response) => {
                console.log(response);
                localStorage.setItem("Data", response.data.token)
                if(response.status=="201"){
    
                    alert("Login Succesfull")
                }
                history.push('/admin')
        }
        catch(error){
            console.error(error.response.data.message);
            alert(error.response.data.message)
        }
       
        // axios.post('http://localhost:3001/admin/login', formData)
        // // .then((response) => {
        //     console.log(response);
        //     localStorage.setItem("Data", response.data.token)
        //     if(response.status=="201"){

        //         alert("Login Succesfull")
        //     }
        //     history.push('/admin')
        // // })
        // .catch((error) => {
        //     console.error(error);
        //     alert("please Check Details")

        // });
    };
    useEffect (() => {
        if (!formData.username && !formData.password) {
            validationError.alldetail = "plz enter detail ";
            setError(validationError.alldetail);
        } else if (!formData.username) {
            validationError.name = "Set Your username ";
            // alert(validationError.name)
            setError(validationError.name);
        }
         else if (!formData.password) {
            validationError.password = "Set Your Password";
            // alert(validationError.password)
            setError(validationError.password);
        }
        else{
            setError("")
        }
    }, [formData]);
    // token string ma j hoy etle ene stringify nai karvanu, array object hoy to kari devanu
    //farithi login kari 

    return (
        <div className="bg-dark text-white">
            <div className="container d-flex  align-items-center heigth-full">
                <div className="w-25 mx-auto">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form.Text className="text-white">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <div className="mt-2 text-center d-flex justify-content-between">
                            <p>
                                Newcomer here? Join !
                                </p>
                                <span>
                                    <Link as={Link} to="/admin/Sigin"><p className="ms-2"> Create account</p></Link>
                                </span>
                            
                        </div>
                        <p className="my-3 text-danger">{error}</p>
                        <div className="text-center mt-4">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;
