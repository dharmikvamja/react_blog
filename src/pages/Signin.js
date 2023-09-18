import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Signin() {
    const [Text, settext] = useState("text");
    const [name, setname] = useState("");
    const [password, setpassword] = useState("");
    const history = useHistory();
    const [error, setError] = useState();
    const Validationerror = {};
    const getLogindata = { username: name, password: password };
  
    const onLogin = () => {
        console.log("hello");
        const getLogindata = { username: name, password: password };
        // console.log(getLogindata);
        axios
            .post("http://localhost:3001/login", getLogindata)
            .then((res) => {
                console.log(res.data);
                // creatdata.username=res.data.username
                // creatdata.password=res.data.password
                localStorage.setItem("UserloginToken", res.data.token);
                if(res.status=="201"){

                    alert("Login Succesfull")
                }
                history.push("/");
            })
            .catch((err) => {
                console.log(err);
                alert(err.response.data.message)
                // alert("please Check Details")
            });
    };
    useEffect(() => {
        if (!getLogindata.username && !getLogindata.password) {
            Validationerror.alldetail = "plz enter detail ";
            setError(Validationerror.alldetail);
        } else if (!name) {
            Validationerror.name = "username is required";
            // alert(Validationerror.name)
            setError(Validationerror.name);
        }
        // else if(getLogindata.username!=creatdata.username){
        //     Validationerror.name = "username is wrong";
        //     setError(Validationerror.name)
        // }
         else if (!password) {
            Validationerror.password = "password is required";
            // alert(Validationerror.password)
            setError(Validationerror.password);
        }
        else{
            setError("")
        }
    }, [getLogindata]);
    console.log(error);
    return (
        <div className="signin-bg">
            <div className=" height-sign ">
                <div className="container  sign-main  height-sign">
                    <div className=" w-25 d-flex flex-column justify-content-center mx-auto sign-titel">
                        <h1 className="text-light text-center">Let's unlock</h1>
                        <h5 className="mt-3 text-light text-center">
                            Time to get your login on ✌️
                        </h5>
                    </div>
                    <div className=" justify-content-center align-item-center login-w mt-5">
                        <div className="  mx-auto p-5 input-box">
                            <div className="w-100">
                                <p className="m-0 mb-2">
                                    <b>Username</b>
                                </p>
                                <input
                                    type="email"
                                    className="w-100 ps-2"
                                    placeholder="johnweek"
                                    value={name}
                                    onChange={(e) => setname(e.target.value)}
                                />
                                <p>{Validationerror.name}</p>
                            </div>
                            <div className="w-100 mt-3 position-relative">
                                <p className="m-0 mb-2">
                                    <b>Password</b>
                                </p>
                                <input
                                    type={Text}
                                    className="w-100 ps-2"
                                    placeholder="Password here"
                                    value={password}
                                    onChange={(e) =>
                                        setpassword(e.target.value)
                                    }
                                />
                                <span className="position-absolute iconposi">
                                    {Text === "text" ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-eye-fill"
                                            viewBox="0 0 16 16"
                                            onClick={() => settext("password")}
                                        >
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-eye-slash-fill"
                                            viewBox="0 0 16 16"
                                            onClick={() => settext("text")}
                                        >
                                            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                        </svg>
                                    )}
                                </span>

                                {/* <button onClick={() => showPass("password")>
                                
                                </button> */}
                            </div>
                            <div className="d-flex w-100 mt-2 justify-content-between">
                                <div className="d-flex align-item-center ms-2">
                                    <input type="checkbox" />
                                    <p className=" ms-1 mb-0">Remeber me</p>
                                </div>
                                <a href="/" className="text-dark">
                                    Explore blogs?
                                </a>
                            </div>
                            <div className=" mt-5">
                                <p className="text-center " > {error}</p>

                              <div className="d-grid gap-2">
                              {error ? "" : <Button
                                        variant="primary"
                                        size="lg"
                                        onClick={onLogin}
                                    >
                                        Log In
                                    </Button>}
                                </div>
                                <div className="mt-5 text-center">
                                    <p>
                                        Newcomer here? Join the club!{" "}
                                        <span>
                                            <a
                                               
                                                className="text-decoration-none ms-2 fw-bold"
                                             onClick={()=>history.push('/newaccount')} >
                                                Register
                                            </a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;
