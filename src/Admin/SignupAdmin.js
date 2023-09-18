import React, { useState,useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
function SignupAdmin() {
    const history = useHistory();

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    const Validationerror = {};

    const formData = { username: user, password: password };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default form submission

        console.log(formData);

        axios
            .post("http://localhost:3001/admin/sign", formData)
            .then((response) => {
                console.log(response);
                localStorage.setItem(
                    "signtoken",
                    JSON.stringify(response.data.token)
                );
                history.push("/admin");
            })
            .catch((error) => {
                console.error(error);
            });
    };
    
const onLoginpage =()=>{
    history.push("/admin/login")
}
useEffect (() => {
    if (!formData.username && !formData.password) {
        Validationerror.alldetail = "plz enter detail ";
        setError(Validationerror.alldetail);
    } else if (!formData.username) {
        Validationerror.name = "Set Your username ";
        // alert(Validationerror.name)
        setError(Validationerror.name);
    }
     else if (!formData.password) {
        Validationerror.password = "Set Your Password";
        // alert(Validationerror.password)
        setError(Validationerror.password);
    }
    else{
        setError("")
    }
}, [formData]);
    return (
        <div className="bg-dark text-white">
            <div className="container d-flex  align-items-center heigth-full">
                <div className="w-25 mx-auto">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Create username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter email"
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                            />
                            <Form.Text className="text-white">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Create Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <div className="mt-3 text-center d-flex">
                            <p>
                                Newcomer here? Join the club!
                                </p>
                                <span>
                                    <Link as={Link} to="/admin/login"><p className="ms-2"> Login</p></Link>
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

export default SignupAdmin;
