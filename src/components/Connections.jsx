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


    if (connections.length===0) return (<h1 className="text-4xl font-bold text-center mb-10">
        No Connection Present
    </h1>);

    return (
        <div key="_id" className="min-h-screen bg-base-200 py-10">
            <h1 className="text-4xl font-bold text-center mb-10">
                Connections
            </h1>

            <div className="max-w-4xl mx-auto space-y-5">
                {connections.map((connections) => {
                    const { _id, firstName, lastName, photoURL, age, gender, about } = connections;
                    return (<div className="card card-side bg-base-100 shadow-xl">
                        <figure className="p-5">
                            <img
                                src={photoURL}
                                className="w-24 h-24 rounded-full object-cover"
                            />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title text-xl">
                                {firstName+ " " +lastName   }
                            </h2>

                          { age && gender && <p className="text-sm opacity-70">
                                {age + " "+gender}
                            </p>}

                            <p className="text-base">
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