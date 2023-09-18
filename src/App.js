import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Create from "./pages/Create";
import "./App.css";
import Layout from "./pages/Layout";
// import Local from "./pages/Local";
import Basic from "./pages/Formik";
import Getlocal from "./pages/Getlocal";
import About from "./About";
import Login from "./Admin/Login";
import HomeAdmin from "./Admin/HomeAdmin";
import { Provider } from "react-redux/es";
import Store from "./App/Store";
import CreateAdminBlog from "./Admin/CreateAdminBlog";
import AdminLayout from "./Admin/AdminLayout";
import SignupAdmin from "./Admin/SignupAdmin";

function App() {
   

    return (
        <div>
        <Provider store={Store}>

            <Router>
               
                <Switch>
                    <Route exact path="/signin">
                        <Signin />
                    </Route>
                    <Route exact path='/admin'>
                    <AdminLayout>
                        <HomeAdmin/>
                    </AdminLayout>
                    </Route>
                    <Route exact path='/CreateBlog'>
                    <AdminLayout>
                        <CreateAdminBlog/>
                    </AdminLayout>
                    </Route>
                  
                    <Route exact path='/admin/login'>
                    <Layout>
                        <Login/>
                    </Layout>
                    </Route>
                    <Route exact path='/admin/Sigin' >
                    <Layout>
                        <SignupAdmin/>
                    </Layout>
                    </Route>
                    <Route exact path="/newaccount">
                        <Create />
                    </Route>
                    <Route exact path="/forme">
                        <Layout>
                            <Basic />
                        </Layout>
                    </Route>
                  
                    <Route exact path="/about">
                        <Layout>
                            <About />
                        </Layout>
                    </Route>

                    <Route exact path="/">
                        <Layout>
                            <Home />
                        </Layout>
                    </Route>
                </Switch>
            </Router>
        </Provider>
        </div>
    );
}

export default App;
