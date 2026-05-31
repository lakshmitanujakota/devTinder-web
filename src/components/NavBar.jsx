import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utilis/constants";
import { removeUser } from "../utilis/userSlice";

const NavBar = () => {

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("login");
    } catch (err) {
      console.log(err);
    }
  }
  
  const handleFeed =()=>{
    try{
         if(!user){
          return (<div className="min-h-screen bg-[#1a1f2e] flex items-center justify-center">
        <h1 className="text-2xl text-[#7f77dd] opacity-60">Please Login</h1>
    </div>);
         }
    }catch(err){
      console.log(err.message);
    }
  };


  return (<div className="flex items-center justify-between px-6 py-3 border-b border-[#2e3a52]"
    style={{ background: "#111827" }}>
    <div className="flex-1">
      <Link to="/" className="text-4xl font-medium text-[#e8e6f7] hover:text-[#afa9ec] transition-colors " onClick={handleFeed()}>devTinder</Link>
    </div>
    {user && (
      <div className="flex items-center gap-3">
        <span className="text-[#e8e6f7]">Welcome, {user.firstName}</span>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="w-9 h-9 rounded-full border-2 border-[#534ab7] overflow-hidden cursor-pointer hover:border-[#7f77dd] transition-colors">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.firstName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-6xl font-medium text-[#afa9ec]"
                style={{ background: '#1a1f2e' }}>
                {user.firstName?.[0]?.toUpperCase()}{user.lastName?.[0]?.toUpperCase()}
              </div>
            )}
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu z-[999] mt-2 w-48 p-1.5 rounded-xl border border-[#2e3a52]" style={{ background: "#1e2536" }}>
            <li>
              <Link to="Profile" className="text-sm text-[#b0aec8] hover:text-[#e8e6f7] hover:bg-[#2e3a52] rounded-lg px-3 py-2">
                Profile
              </Link>
            </li>
            <li><Link to="/connection" className="text-sm text-[#b0aec8] hover:text-[#e8e6f7] hover:bg-[#2e3a52] rounded-lg px-3 py-2">Connetions</Link></li>
            <li><Link to="/requests" className="text-sm text-[#b0aec8] hover:text-[#e8e6f7] hover:bg-[#2e3a52] rounded-lg px-3 py-2">Request Received</Link></li>
            <li><Link onClick={handleLogout} className="w-full text-left text-sm text-red-400 hover:text-red-300 hover:bg-[#2e3a52] rounded-lg px-3 py-2">Logout</Link></li>
          </ul>
        </div>
      </div>
    )}

  </div >)
};

export default NavBar; 