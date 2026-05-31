import axios from "axios";
import { BASE_URL } from "../utilis/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utilis/connectionSlice";

const Connections = () => {
    const dispatch = useDispatch();
    const connections = useSelector((store) => store.connections);

    const fetchConnections = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/connections", { withCredentials: true });
            dispatch(addConnections(res.data.data));
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => { fetchConnections(); }, []);


    if (connections.length === 0) return (<div className="min-h-screen bg-[#1a1f2e] flex items-center justify-center">
        <h1 className="text-2xl text-[#7f77dd] opacity-60">No connections yet</h1>
    </div>);

    return (
        <div className="min-h-screen bg-[#1a1f2e] py-10 px-4">
            <h1 className="text-3xl font-medium text-center mb-8 text-[#cecbf6] tracking-wide">
                Connections
            </h1>

            <div className="max-w-2xl mx-auto space-y-3">
                {connections.map((connection) => {
                    const { _id, firstName, lastName, photoURL, age, gender, about } = connection;
                    return (<div key={_id}className="flex items-center gap-4 p-4 rounded-2xl border border-[#2e3a52]"
                        style={{ background: "#242b3d" }}>

                        {photoURL ? (<img
                            src={photoURL}
                            alt={firstName?.[0]?.toUpperCase()}
                            className="w-14 h-14 rounded-full object-cover border-2 border-[#1d9e75] flex-shrink-0"
                        />) : <div>
                            {firstName?.[0]?.toUpperCase()}{lastName?.[0].toUpperCase()}
                        </div>}


                        <div className="flex-1 min-w-0">
                            <h2 className="text-[#e8e6f7] font-medium text-base">
                                {firstName + " " + lastName}
                            </h2>

                            {age && gender && <p className="text-[#5dcaa5] text-xs mt-0.5">
                                {age + " " + gender}
                            </p>}

                            <p className="text-[#b0aec8] text-sm mt-1 truncate">
                                {about}
                            </p>
                        </div>
                    </div>
                    )
                })};



            </div>
        </div>
    )
};

export default Connections;