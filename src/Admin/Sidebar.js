import React from "react";
import { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import { edit } from "../Fetures/Blogerslice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es";

function Sidebar() {
    const dispatch = useDispatch();
    const history = useHistory();
    const GetToken=useSelector(state=>state.Bloger.Token)
    const Viewmode = useSelector((state) => state.Bloger.view);
    console.log(Viewmode);

    
    
    // const [darkMode, setDarkMode] = useState(Viewmode);
    const toggleDarkMode = () => {
        // setDarkMode(!Viewmode)
        dispatch(edit(!Viewmode))
    };
    
    const bodyClasses = Viewmode ? "bodydark" : "bg-light";
    const menuClasses = Viewmode ? "menudark" : "bg-light";
    const textClasses = Viewmode ? "text-light" : "text-dark";
    const sidebar = Viewmode ? "bgdark" : "bg-light";

    const logoutHandler=()=>{
        localStorage.removeItem("Data")
        return history.push('/admin/login')
    }
    return (
        <div className=" container-fluid">
            <div className="">
                <div className=" side ">
                    <div className={` ${sidebar } ${textClasses }`}>
                        <div className="py-4 px-2">
                            <div className="pb-4  d-flex gap-2  align-items-center border-bottom">
                                <div className="  ">
                                    <i className="fa fa-bolt px-3 text-light py-3 rounded-3 bg-primary fs-4"></i>
                                </div>
                                <h3 className="align-self-center">Hiphonic</h3>
                            </div>

                            <div className="py-2 pt-4 pb-3 border-bottom">
                                <h4 className="pb-3">MENU</h4>
                                <div className=" py-2 side_menu_bg ps-3  d-flex align-items-center gap-2 rounded-3 ">
                                    <i className="bi bi-grid-fill fs-4"></i>
                                    <p>
                                        {" "}
                                        <Link
                                            to={"/admin"}
                                            className={`text-decoration-none ${textClasses}`}
                                        >
                                            Dashboard
                                        </Link>{" "}
                                    </p>
                                </div>

                                <div className="mt-2 py-2 side_menu_bg ps-3  d-flex align-items-center gap-3 rounded-3 ">
                                    <i className="bi bi-check-square fs-4" />
                                    <p>My Tasks</p>
                                </div>
                                <div className="mt-2 py-2 side_menu_bg ps-3  d-flex align-items-center gap-3 rounded-3 ">
                                    <i className="bi bi-chat-dots fs-4"></i>
                                    <p>
                                        <Link
                                            to={"/CreateBlog"}
                                            className={`text-decoration-none ${textClasses}`}
                                        >
                                            Catagorey
                                        </Link>{" "}
                                    </p>
                                </div>
                                <div className="mt-2 py-2 side_menu_bg ps-3  d-flex align-items-center gap-3 rounded-3 ">
                                    <i className="bi bi-trophy fs-4"></i>
                                    <p>Goals</p>
                                </div>
                            </div>

                            <div className="py-2 pt-3 ">
                                <div className=" pb-4 d-flex justify-content-between align-items-center">
                                    <h4 className="">PROJECTS</h4>
                                    <i className="bi bi-plus fs-3"></i>
                                </div>
                                <div className=" py-2  ps-3  d-flex align-items-center gap-3 rounded-3">
                                    <i className="bi bi-circle-fill fs-4 text-primary"></i>
                                    <p>Website Design</p>
                                </div>

                                <div className="mt-2 py-2  ps-3  d-flex align-items-center gap-3 rounded-3">
                                    <i className="bi bi-circle-fill fs-4 text-warning"></i>
                                    <p>SEO Analythics</p>
                                </div>
                                <div className="mt-2 py-2  ps-3  d-flex align-items-center gap-3 rounded-3">
                                    <i className="bi bi-circle-fill fs-4 text-success"></i>
                                    <p>Hiphonic App</p>
                                </div>
                                <div className="mt-auto pt-3">
                                    <div className="mt-2 py-4  ps-3   d-flex align-items-center gap-3 rounded-3 border-bottom">
                                        <i className="fa fa-gear"></i>
                                        <p>Settings</p>
                                    </div>
                                    <div className="mt-2 py-2  ps-3  d-flex align-items-center gap-3 rounded-3">
                                        <i className="fa fa-moon"></i>
                                        <p>Dark Mode</p>

                                        <label className="switch">
                                            <input
                                                type="checkbox"
                                                id="che"
                                                onChange={toggleDarkMode}
                                            />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                    <div className="text-center mt-4">
                                        <button className="btn btn-danger" onClick={logoutHandler}>
                                            <i className="fa-solid fa-arrow-right-from-bracket me-2"></i>{" "}
                                            LOGOUT
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
