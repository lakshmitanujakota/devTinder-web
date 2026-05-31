import axios from "axios";
import { BASE_URL } from "../utilis/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utilis/feedSlice";

const UserCard = ({ user }) => {
         
    const { _id, firstName, lastName, age, about, gender, photoURL } = user
    const dispatch=useDispatch();

    const handleConnection =async (status,userid)=>{
        try{
        const res=await axios.post(BASE_URL+"/request/"+status +"/"+userid,{},{withCredentials:true});
        dispatch(removeFeed(userid));
        }catch(err){

        }
    }

    return (
        <div className="w-96 rounded-3xl border border-[#2e3a52] overflow-hidden" style={{ background: "#242b3d" }}>
            <div className="w-full h-72 bg-[#1a1f2e]">
                <img
                    src={photoURL}
                    alt="User Photo"
                    className="w-full h-full object-cover" />
            </div>
            <div className="p-6 text-center">
                <h2 className="text-xl font-medium text-[#e8e6f7]">{firstName + " " + lastName} </h2>
                {age && gender && <p className="text-sm text-[#5dcaa5] mt-1">{age + " " + gender}</p>}
                <p className="text-[#b0aec8] text-sm mt-3">{about}</p>
                <div className="flex gap-3 justify-center mt-5">
                    <button className="px-6 py-2 rounded-xl text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
                    onClick={()=>handleConnection("interested",_id)}>Interested</button>
                    <button className="px-6 py-2 rounded-xl text-sm font-medium bg-[#1a1f2e] text-[#888] border border-[#2e3a52] hover:border-[#534ab7] hover:text-[#afa9ec] transition-colors"
                    onClick={()=>handleConnection("ignored",_id)}>Ignore</button>
                </div>
            </div>
        </div>)
};

export default UserCard;