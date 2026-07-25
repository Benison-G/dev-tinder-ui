import axios from "axios";
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../store/feedSlice";
import { useEffect } from "react";

const Feed = () => {
    const dispatch = useDispatch();
    const feed = useSelector(store => store.feed);

    console.log(feed)

    const fetchUsers = async () => {
        if (feed && feed.length) return;
        try {
            const response = await axios.get(BASE_URL + "feed?page=1&limit=2", {
                withCredentials: true
            });
            dispatch(addFeed(response?.data?.data))
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return feed && feed.length ? (
        <div className="flex flex-col gap-4 mx-5 my-5">
            {feed.map((item) => (
                <UserCard key={item._id || item.id} user={item} />
            ))}
        </div>
    ) : (
        <>No Data</>
    );
}

export default Feed;