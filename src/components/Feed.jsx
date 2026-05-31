import axios from "axios";
import { BASE_URL } from "../utilis/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utilis/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
    const feed = useSelector((store) => store.feed);
    const dispatch = useDispatch();

    const getUsers = async () => {
        if (feed) return;
        try {
            const users = await axios.get(BASE_URL + "/feed", { withCredentials: true });
            console.log(users)
            dispatch(addFeed(users.data.data));
        }
        catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        getUsers()
    }, []);

    if(!feed) return

    if(feed.length<=0) return  (<div className="min-h-screen bg-[#1a1f2e] flex items-center justify-center">
        <h1 className="text-2xl text-[#7f77dd] opacity-60">No New Users Found</h1>
    </div>);

    return (
        feed &&
        (<div className="flex justify-center my-10">
            <UserCard user={feed[0]} />
        </div>)
    )
};

export default Feed;    