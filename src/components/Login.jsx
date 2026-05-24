import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utilis/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utilis/constants";

const Login = () => {
    const [emailId, setEmail] = useState("rahul@gmail.com");
    const [password, setPassword] = useState("Rahul@123");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const[error, setError]=useState("");

    const handlelogin = async () => {
        try{
            const res = await axios.post(BASE_URL + "/login", { emailId, password },
                { withCredentials: true })
            console.log(res.data);
            dispatch(addUser(res.data));
            navigate("/");
        }
        catch(err){ 
            setError(err?.response?.data || "Something went wrong");
        }
    }

    return (<div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="card bg-neutral text-neutral-content w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title justify-center text-2xl">Login</h2>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-neutral-content">Email</span>
                    </label>
                    <input
                        type="email"
                        value={emailId}
                        className="input input-bordered w-full text-base-content"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-neutral-content">Password</span>
                    </label>
                    <input
                        type="password"
                        value={password}
                        className="input input-bordered w-full text-base-content"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <p className="text-red-500">{error}</p>
                <div className="card-actions mt-4">
                    <button className="btn btn-primary w-full" onClick={handlelogin}>Login</button>
                </div>
            </div>
        </div>
    </div>)
};

export default Login;