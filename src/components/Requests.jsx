import axios from "axios";
import { BASE_URL } from "../utilis/constants";
import { useEffect } from "react";

const Requests = () => {
    const fetchRequests = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/requests/received", { withCredentials: true });
            console.log(res.data);
        } catch (err) { 
            console.log(err.message);
        }
    }
    useEffect(() => { fetchRequests }, []);

    return (
        <div>Request recived</div>
    )
};

export default Requests;