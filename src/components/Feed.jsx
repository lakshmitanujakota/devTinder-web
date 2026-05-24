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
            dispatch(addFeed(users.data));
        }
        catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        getUsers()
    }, []);

    return (
        feed &&
        (<div className="flex justify-center my-10">
            <UserCard user={feed.data[0]} />
        </div>)
    )
};

export default Feed;    