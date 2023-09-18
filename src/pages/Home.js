import { Row, Col, Container, Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { admin, modal } from "../Fetures/Blogerslice";
function Home() {
    // const [show, setShow] = useState(false);
    const [UserBlogtitel, setUserBlogtitel] = useState("");
    const [UserBlogimg, setUserBlogimg] = useState("");
    const [userdescription, setuserdescription] = useState("");
    const [category, setcategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const Setmodal = useSelector((state) => state.Bloger.Modal);
    console.log(Setmodal);
    const dispatch = useDispatch();
    const DataSelected = useSelector((state) => state.Bloger.item);
    // console.log(DataSelected,"data");

    const CloseModal = () => {
        dispatch(modal(false));
    };
    const submitHandler = () => {
        const UserModal = {
            title: UserBlogtitel,
            image: UserBlogimg,
            description: userdescription
        };
        console.log(UserModal.titel);
        const token = localStorage.getItem("UserloginToken");
        const formData = new FormData();
        formData.append("title", UserModal.title);
        formData.append("image", UserModal.image);
        formData.append("description", UserModal.description);
        formData.append("category",UserModal.category)

        axios
            .post("http://localhost:3001/blog/add", formData, {
                headers: { token: token }
            })
            .then((res) => {
                console.log(res.data.data);
                dispatch(modal(false));
                window.location.reload()
                // Close the modal
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        axios
            .get("http://localhost:3001/blog/all")
            .then((res) => {
                // setblog(res.data.data)
                console.log(res.data.data);
                dispatch(admin(res.data.data));
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    // console.log(DataSelected);

    useEffect(() => {
        axios
            .get("http://localhost:3001/category/all")
            .then((res) => {
                // console.log(res.data.data);
                setcategory(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    // console.log(category[0].name);
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedCategory(selectedValue);
        // console.log(DataSelected[10].title);
        
        const dataSelect=DataSelected.filter((e)=>{
            return e.title==selectedValue
        })
        console.log(dataSelect);
        // You can call your ShowCategory function with the selected category name here
        
    };
    return (
        <div className="">
            <Container>
                <div>
                    <h1 className="pt-5">Latest articles</h1>    
                </div>
                <div>
                <select
                        name=""
                        id=""
                        value={selectedCategory}
                        onChange={handleSelectChange}
                    >
                        <option value="" disabled>
                            Select a category
                        </option>
                        {category.map((el) => (
                            <option key={el.name} value={el.name}>
                                {el.name}
                            </option>
                        ))}
                    </select>
                </div>
                <Row className="pt-5 border-top">
                    {DataSelected.map((val, index) => {
                        return (
                            <Col key={index} xs={12} md={4} className="mt-5">
                                <div className="">
                                    <Image
                                        src={
                                            "http://localhost:3001/images/" +
                                            val.image
                                        }
                                        alt=""
                                        fluid
                                        className="img-size img-hover"
                                    />
                                </div>
                                <div className="my-3">
                                    <h1 className="fs-1">{val.title}</h1>
                                    <p>{val.description}</p>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>

            <Modal
                show={Setmodal}
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
                            value={UserBlogtitel}
                            onChange={(e) => {
                                setUserBlogtitel(e.target.value);
                            }}
                        />

                        <label htmlFor="" className=" my-2">
                            Enter imglink
                        </label>
                        <input
                            type="file"
                            onChange={(e) => {
                                setUserBlogimg(e.target.files[0]);
                            }}
                        />
                        <label htmlFor="" className=" my-2">
                            Enter description
                        </label>
                        <input
                            type="text"
                            value={userdescription}
                            onChange={(e) => {
                                setuserdescription(e.target.value);
                            }}
                        />
                        {/* <label htmlFor="" className=" my-2">
                            Enter category
                        </label> */}
                        {/* <input
                            type="text"
                            value={category}
                            onChange={(e) => {
                                setcategory(e.target.value);
                            }}
                        /> */}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={submitHandler}>Submit</Button>
                    <Button onClick={CloseModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Home;
