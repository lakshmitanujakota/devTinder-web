import axios from "axios";
import { BASE_URL } from "../utilis/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequests } from "../utilis/requestSlice";

const Requests = () => {
    const requests = useSelector((store) => store.requests);
    const dispatch = useDispatch();

    const fetchRequests = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/requests/received", { withCredentials: true });
            console.log(res.data);
            dispatch(addRequests(res.data.data));
        } catch (err) {
            console.log(err.message);
        }
    };

    const reviewRequest= async (status, _id)=>{
        try{
           const res = await axios.post(BASE_URL+"/request/review/"+ status +"/"+_id,
            {},{withCredentials:true});
            dispatch(removeRequests(_id));
        
        }catch(err){
          console.log(err.message)
        }
    }

    useEffect(() => { fetchRequests(); }, []);

    if (requests.length === 0) return (<div className="min-h-screen bg-[#1a1f2e] flex items-center justify-center">
        <h1 className="text-2xl text-[#7f77dd] opacity-60">No connection requests yet</h1>
    </div>);

    return (
        <div className="min-h-screen bg-[#1a1f2e] py-10 px-4">
            <h1 className="text-3xl font-medium text-center mb-10 text-[#cecbf6] tracking-wide">
                Connection Requests
            </h1>

            <div className="max-w-2xl mx-auto space-y-4">
                {requests.map((request) => {
                    const { _id, firstName, lastName, photoURL, age, gender, about } = request.fromUserId;

                    return (
                        <div key={_id} className="flex items-center gap-4 p-5 rounded-2xl border border-[#2e3a52]" style={{ background: "#242b3d" }}>
                            <div className="flex-shrink-0">

                                <img
                                    src={photoURL}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-[#534ab7]"
                                />

                            </div>

                            <div className="flex-1 min-w-0">
                                <h2 className="text-[#e8e6f7] font-medium text-base">
                                    {firstName + " " + lastName}
                                </h2>

                                {age && gender && <p className="text-[#888] text-xs mt-0.5">
                                    {age + " " + gender}
                                </p>}

                                <p className="text-[#b0aec8] text-sm mt-1 truncate">
                                    {about}
                                </p>
                            </div>

                            <div className="flex flex-row gap-2 items-center flex-shrink-0">
                                <button className="px-5 py-2 rounded-xl text-sm font-medium bg-white text-[#1a1f2e] hover:bg-gray-100 transition-colors"
                                 onClick={()=>reviewRequest("accepted",request._id)}>
                                    Accept
                                </button>
                                <button className="px-5 py-2 rounded-xl text-sm font-medium bg-transparent text-[#888] border border-[#2e3a52] hover:border-[#888] transition-colors"
                                onClick={()=>reviewRequest("rejected",request._id)}>
                                    Reject
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Requests;