import React, { useEffect } from "react";
import "../App.css";
import { useSelector } from "react-redux";

function HomeAdmin() {
   

    const Viewmode = useSelector((state) => state.Bloger.view);


    const menuClasses = Viewmode ? "menudark" : "bg-light";
    const textClasses = Viewmode ? "text-light" : "text-dark";
    

    return (
        <div>
            <div id="clr" className="">
                <section className="main_pt">
                    <div className="main">
                        <div className="container-fluid ">
                            <div className="">
                                <div className="p-0">
                                    <div className="">
                                        <nav className={menuClasses}>
                                            <div className="container-fluid py-4 d-flex ">
                                                <h3
                                                    className={`navbar-brand fs-3 ${textClasses}`}
                                                >
                                                    Dashboard
                                                </h3>
                                                <form
                                                    className="d-flex ms-auto align-items-center"
                                                    role="search"
                                                >
                                                    <input
                                                        className="form-control me-2"
                                                        type="search"
                                                        placeholder="Search"
                                                        aria-label="Search"
                                                    />
                                                    <i
                                                        className={`fa fa-bell fs-5 px-4 ${textClasses}`}
                                                    />
                                                    <button
                                                        className="btn btn-outline-primary"
                                                        type="submit"
                                                    >
                                                        Search
                                                    </button>
                                                </form>
                                            </div>
                                        </nav>

                                        <div className=" ">
                                            <div className="col-9  my-5 mx-4">
                                                <div className="recent_pro  py-4 px-4 side">
                                                    <div className="titel pb-4 border-bottom d-flex align-items-center justify-content-between">
                                                        <h3>Recent Project</h3>
                                                        <i className="fa fa-ellipsis"></i>
                                                    </div>
                                                    <div className="row mt-3 m-0  gap-3 ">
                                                        <div className="col p-0 body_bg rounded-4 menuclr">
                                                            <div className="px-4 py-3 ">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <h4>
                                                                        Hiphonic
                                                                    </h4>
                                                                    <i className="fa fa-ellipsis"></i>
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center mt-3">
                                                                    <p className="fs-5 p_text-clr">
                                                                        Progress
                                                                    </p>
                                                                    <p className="fw-bold">
                                                                        55%
                                                                    </p>
                                                                </div>
                                                                <div
                                                                    className="progress mt-3 progress_line"
                                                                    role="progressbar"
                                                                    aria-label="Info example"
                                                                    aria-valuenow="50"
                                                                    aria-valuemin="0"
                                                                    aria-valuemax="100"
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-primary text-dark"
                                                                        style={{
                                                                            width: "55%"
                                                                        }}
                                                                    ></div>
                                                                </div>
                                                                <div className="cnt_profile mt-3 d-flex justify-content-between">
                                                                    <div className="d-flex align-items-center">
                                                                        <i className="bi bi-check-square me-2"></i>
                                                                        <p>
                                                                            8/
                                                                            <span className="p_text-clr">
                                                                                15
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div>
                                                                        <img
                                                                            src="./img/user.png"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col p-0 body_bg rounded-4 menuclr">
                                                            <div className="px-4 py-3 ">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <h4>
                                                                        SEO
                                                                        Analythics
                                                                    </h4>
                                                                    <i className="fa fa-ellipsis"></i>
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center mt-3">
                                                                    <p className="fs-5 p_text-clr">
                                                                        Progress
                                                                    </p>
                                                                    <p className="fw-bold">
                                                                        35%
                                                                    </p>
                                                                </div>
                                                                <div
                                                                    className="progress mt-3 progress_line"
                                                                    role="progressbar"
                                                                    aria-label="Success example"
                                                                    aria-valuenow="25"
                                                                    aria-valuemin="0"
                                                                    aria-valuemax="100"
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-danger"
                                                                        style={{
                                                                            width: "35%"
                                                                        }}
                                                                    ></div>
                                                                </div>
                                                                <div className="cnt_profile mt-3 d-flex justify-content-between">
                                                                    <div className="d-flex align-items-center">
                                                                        <i className="bi bi-check-square me-2"></i>
                                                                        <p>
                                                                            8/
                                                                            <span className="p_text-clr">
                                                                                40
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div>
                                                                        <img
                                                                            src="./img/user2.png"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col p-0 body_bg rounded-4 menuclr">
                                                            <div className="px-4 py-3 ">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <h4>
                                                                        Dibhub
                                                                        App
                                                                    </h4>
                                                                    <i className="fa fa-ellipsis"></i>
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center mt-3">
                                                                    <p className="fs-5 p_text-clr">
                                                                        Progress
                                                                    </p>
                                                                    <p className="fw-bold">
                                                                        55%
                                                                    </p>
                                                                </div>
                                                                <div
                                                                    className="progress progress_line mt-3"
                                                                    role="progressbar"
                                                                    aria-label="Warning example"
                                                                    aria-valuenow="75"
                                                                    aria-valuemin="0"
                                                                    aria-valuemax="100"
                                                                >
                                                                    <div
                                                                        className="progress-bar bg-warning text-dark"
                                                                        style={{
                                                                            width: "75%"
                                                                        }}
                                                                    ></div>
                                                                </div>
                                                                <div className="cnt_profile mt-3 d-flex justify-content-between">
                                                                    <div className="d-flex align-items-center">
                                                                        <i className="bi bi-check-square me-2"></i>
                                                                        <p>
                                                                            40/
                                                                            <span className="p_text-clr">
                                                                                55
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                    <div>
                                                                        <img
                                                                            src="./img/user3.png"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4 py-3 px-2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default HomeAdmin;
