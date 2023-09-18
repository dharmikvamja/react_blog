import React, { useState,useEffect } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";

const  Create  = () => {
    const [name, setname] = useState("");
    const [password, setpassword] = useState("");

    const [error, setError] = useState();
    const Validationerror = {};
    const history=useHistory()
    const userData = { username: name, password: password };
    const createUser = async (e) => {
        try {
          console.log(userData);
          const res = await axios.post("http://localhost:3001/signup", userData);
          console.log(res.data.token);
      
          localStorage.setItem("signinToken", res.data.token);
          setname("");
          setpassword("");
          history.push("/signin");
        } catch (err) {
          console.log(err);
        }
      };
      
    useEffect (() => {
        if (!userData.username && !userData.password) {
            Validationerror.alldetail = "plz enter detail ";
            setError(Validationerror.alldetail);
        } else if (!userData.username) {
            Validationerror.name = "Set Your username ";
            // alert(Validationerror.name)
            setError(Validationerror.name);
        }
         else if (!userData.password) {
            Validationerror.password = "Set Your Password";
            // alert(Validationerror.password)
            setError(Validationerror.password);
        }
        else{
            setError("")
        }
    }, [userData]);
    return (
        <div>
            <div className="signin-bg">
                <div className=" height-sign ">
                    <div className="container  sign-main  height-sign">
                        <div className=" w-50 d-flex flex-column justify-content-center mx-auto sign-titel">
                            <h1 className="text-light text-center">
                                Come on in!
                            </h1>
                            <h5 className="mt-3 text-light text-center">
                                Sign up and receive virtual high-fives ✋
                            </h5>
                        </div>
                        <div className=" justify-content-center align-item-center login-w mt-5">
                            <div className="  mx-auto p-5 input-box">
                                <div className="w-100 mt-3">
                                    <p className="m-0 mb-2">
                                        <b>UserName</b>
                                    </p>
                                    <input
                                        type="text"
                                        className="w-100"
                                        value={name}
                                        placeholder="@username"
                                        onChange={(e) =>
                                            setname(e.target.value)
                                        }
                                    />
                                </div>

                                <div className="w-100 mt-3">
                                    <p className="m-0 mb-2">
                                        <b>Password</b>
                                    </p>
                                    <input
                                        type="password"
                                        className="w-100"
                                        value={password}
                                        onChange={(e) =>
                                            setpassword(e.target.value)
                                        }
                                    />
                                </div>
                                <p className="text-center " > {error}</p>

                                <div className=" mt-5">
                                    <div className="d-grid gap-2">
                                        <Button
                                            variant="primary"
                                            size="lg"
                                            onClick={createUser}
                                        >
                                           create account
                                        </Button>
                                    </div>
                                    <div className="mt-5 text-center">
                                        <p>
                                            Ready to log in again?
                                            <span>
                                                <p
                                                   
                                                    className="text-decoration-none ms-2 fw-bold text-primary "
                                                onClick={()=>history.push('/signin')} >
                                                    Login
                                                </p>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create;
