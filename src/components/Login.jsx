import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utilis/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utilis/constants";

const Login = () => {
    const [emailId, setEmail] = useState("rahul@gmail.com");
    const [password, setPassword] = useState("Rahul@123");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const[error, setError]=useState("");
    const[isloggedIn, setLoggedIn]=useState(true);

    const handlelogin = async () => {
        setError("");
        try{
            const res = await axios.post(BASE_URL + "/login", { emailId, password },
                { withCredentials: true })
            dispatch(addUser(res.data));
            navigate("/");
        }
        catch(err){ 
            setError(err?.response?.data || "Something went wrong");
        }
    }

    const handleSignUp = async ()=>{
         if (!firstName || !lastName || !emailId || !password) {
        setError("All fields are required");
        return;
        setError("");
     }
        try{
          const res=await axios.post(BASE_URL+"/signup",{firstName, lastName, emailId, password},{withCredentials:true});
         dispatch(addUser(res.data));
         navigate("/profile");
        }catch(err){
            setError(err?.response?.data || "Something went wrong");
        }
    }

    return (
    <div className="min-h-screen flex items-center justify-center"
        style={{ background: "#1a1f2e" }}>

        <div className="w-96 rounded-2xl border border-[#2e3a52] p-8"
            style={{ background: "#242b3d" }}>

            <div className="text-center mb-8">
                <h1 className="text-2xl font-medium text-[#cecbf6]">devTinder</h1>
                <p className="text-sm text-[#888] mt-1">{isloggedIn ? "Log In" : "Sign in to your account"}</p>
            </div>

            {!isloggedIn && <><div className="mb-4">
                <label className="block text-xs text-[#888] mb-1">First Name</label>
                <input
                    type="test"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-sm text-[#e8e6f7] border border-[#2e3a52] outline-none focus:border-[#534ab7] transition-colors"
                    style={{ background: "#1a1f2e" }}
                />
            </div>

             <div className="mb-4">
                <label className="block text-xs text-[#888] mb-1">LastName</label>
                <input
                    type="test"
                    value={lastName}    
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-sm text-[#e8e6f7] border border-[#2e3a52] outline-none focus:border-[#534ab7] transition-colors"
                    style={{ background: "#1a1f2e" }}
                />
            </div>
            </>}

            <div className="mb-4">
                <label className="block text-xs text-[#888] mb-1">Email</label>
                <input
                    type="email"
                    value={emailId}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-sm text-[#e8e6f7] border border-[#2e3a52] outline-none focus:border-[#534ab7] transition-colors"
                    style={{ background: "#1a1f2e" }}
                />
            </div>

            <div className="mb-4">
                <label className="block text-xs text-[#888] mb-1">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-sm text-[#e8e6f7] border border-[#2e3a52] outline-none focus:border-[#534ab7] transition-colors"
                    style={{ background: "#1a1f2e" }}
                />
            </div>

            {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

            <button
                onClick={isloggedIn ? handlelogin : handleSignUp}
                className="w-full py-2 rounded-xl text-sm font-medium bg-[#534ab7] text-[#e8e6f7] hover:bg-[#7f77dd] transition-colors mt-2">
                {isloggedIn? "Login" : "Sign In"}
            </button>

            <div className="text-center text-xs text-[#888] mt-6">
                Don't have an account?{" "}
                <p
                    onClick={()=>setLoggedIn(prev => !prev)}
                    className="text-[#7f77dd] cursor-pointer hover:text-[#afa9ec] transition-colors">
                    {isloggedIn ? "Sign Up" :"Log In"}
                </p>
            </div>
        </div>
    </div>
);
};

export default Login;