import React, { Children } from "react";
import Sidebar from "./Sidebar";
import AdminFooter from "./AdminFooter";
import { useState ,useEffect} from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { token } from "../Fetures/Blogerslice";
function AdminLayout({ children }) {


  

    // const[token,settoken]=useState("")
    const dispatch=useDispatch()
    const history = useHistory();
    const GetToken=useSelector(state=>state.Bloger.Token)
    const Viewmode =useSelector(state=>state.Bloger.view)
    const bodyClasses = Viewmode ? "bodydark" : "bg-light";


    useEffect(()=>{
    
        const dataGet = localStorage.getItem("Data");
    
        if (!dataGet) {
            return history.push('/admin/login')
        }
        // settoken(DATAget)
        dispatch(token(dataGet))
    },[])
    if(!GetToken){
        return <h1>...Loading</h1>
    }

   
    return (
        <div className= {` container-fluid  ${bodyClasses}`}>
            <div className="row">
                <div className="col-2 ">
                    <Sidebar />
                </div>
                <div className={`col-10 `}>
                {children}
                </div>
            </div>
            {/* <AdminFooter /> */}
        </div>
    );
}

export default AdminLayout;
