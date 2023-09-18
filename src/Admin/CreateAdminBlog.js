import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useSelector } from "react-redux";
function CreateAdminBlog() {
    const [show, setshow] = useState(false);
    const [titel, settitel] = useState("");
    const [img, setimg] = useState("");
    const [card, setcard] = useState([]);
    const [edit, setedit] = useState([]);
    const [condition, setcondition] = useState(false);
    // show data bt get method

    const Viewmode = useSelector((state) => state.Bloger.view);

    const textClasses = Viewmode ? "text-light" : "text-dark";

    const ShowHandler = () => {
        axios
            .get("http://localhost:3001/category/all")
            .then((res) => {
                // setblog(res.data.data)
                console.log(res);
                setcard(res.data.data);

                //   dispatch(admin(res.data.data))
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        ShowHandler();
    }, []);
    const AddHandler = () => {
        setshow(true);
    };

    const submitHandler = () => {
        if (condition) {
            const token = localStorage.getItem("Data");
            const editCategory = { name: titel, image: img };
            const formData = new FormData();
            formData.append("name", editCategory.name);
            formData.append("image", editCategory.image);
            formData.append("id", edit._id);
            
            axios
                .put("http://localhost:3001/category/update", formData, {
                    headers: { token: token }
                })
                .then((res) => {
                    console.log(res);
                    setcondition(false);
                    ShowHandler();
                })
                .catch((er) => {
                    console.log(er);
                });

            setshow(false);
        } else {
            const newBlog = {
                name: titel,
                image: img
            };
            console.log(newBlog.name);

            // Send the newBlog object to the server using Axios POST request
            const token = localStorage.getItem("Data");
            // append data
            const formData = new FormData();
            formData.append("name", newBlog.name);
            formData.append("image", newBlog.image);

            console.log(formData);
            axios
                .post("http://localhost:3001/category/add", formData, {
                    headers: { token: token }
                })
                .then((res) => {
                    console.log(res.data.data);
                    ShowHandler();
                    setshow(false); // Close the modal
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    // delet category

    const DeletCategory = (id) => {
        // console.log(id);
        const token = localStorage.getItem("Data");

        const afterDelet = card.filter((ele) => {
            return ele._id != id;
        });
        console.log(afterDelet);
        setcard(afterDelet);
        // const headers = {
        //     Authorization: `Bearer ${token}`,
        // };
        axios
            .delete(`http://localhost:3001/category/delete/${id}`, {
                headers: { token: token }
            })

            .then((res) => {
                console.log(res);
            });
        setcard(afterDelet);
    };
    // update Category

    const Updatecategory = (id) => {
        setshow(true);
        
        const newDATA = card.find((e) => {
            return e._id == id;
        });
        console.log(newDATA);
        settitel(newDATA.name);
        setimg(newDATA.img);
        setcondition(true);
        setedit(newDATA);
    };
    // view category
    // const Viewcategory = (value) => {
    //     const SelectedCategory = card.filter((e) => {
    //         return e.name == value;
    //     });
    //     console.log(SelectedCategory);
    //     setcard(SelectedCategory);
    // };
    return (
        <div className="py-3">
            <div>
                <Modal
                    show={show}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Modal heading
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Centered Modal</h4>
                        <div className="d-flex flex-column my-3">
                            <label htmlFor="" className=" my-2">
                                Enter Titel
                            </label>
                            <input
                                type="text"
                                value={titel}
                                onChange={(e) => {
                                    settitel(e.target.value);
                                }}
                            />

                            <label htmlFor="" className=" my-2">
                                Enter imglink
                            </label>
                            <input
                                type="file"
                                onChange={(e) => {
                                    setimg(e.target.files[0]);
                                }}
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={submitHandler}>Submit</Button>
                        <Button onClick={() => setshow(false)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className=" container-fluid mt-4 ">
                <div className="d-flex  justify-content-center gap-4">
                   
                    <div className=" ms-auto ">
                        <button
                            className="btn btn-primary"
                            onClick={AddHandler}
                        >
                            + Add Category
                        </button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5 gap-5">
                    {card.map((el) => {
                        return (
                            <div className="col-3 ">
                                <div className="my-2 d-flex justify-content-between align-items-center">
                                    <h2 className={textClasses}>{el.name}</h2>
                                    <div >
                                        <i
                                            className={`fa-solid fa-trash-can pe-2 ${textClasses}`}
                                            onClick={() =>
                                                DeletCategory(el._id)
                                            }
                                        ></i>
                                        <i
                                             className={`fa-regular fa-pen-to-square ${textClasses}`}
                                            onClick={() =>
                                                Updatecategory(el._id)
                                            }
                                        ></i>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src={
                                            "http://localhost:3001/images/" +
                                            el.image
                                        }
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default CreateAdminBlog;
