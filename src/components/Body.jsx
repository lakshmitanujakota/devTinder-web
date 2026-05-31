import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";
import { BASE_URL } from "../utilis/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utilis/userSlice";
import { useEffect } from "react";
import Footer from "./Footer";

const Body = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const user=useSelector((store)=>store.user);

    const fetchUser = async () => {
        if(user) return;
        try {
            const res = await axios.get(BASE_URL + "/profile/view", { withCredentials: true });
            dispatch(addUser(res.data));
        } catch (err) {
            if(err.status===401){
                navigate("/login");
            }
            console.log(err);
        }
    }

    useEffect(()=>{
     fetchUser();
    },[])

    return (
        <div className="flex flex-col min-h-screen" style={{ background: "#1a1f2e" }}>
            <NavBar />
           <div className="flex-1">       
            <Outlet />
        </div>
            <Footer/>
        </div>
    )
};

export default Body;