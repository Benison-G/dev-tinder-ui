import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/userSlice";
import { useEffect } from "react";

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const fetchUser = async () => {
        if (user) return;
        try {
            const response = await axios.get(BASE_URL + "profile/view", {
                withCredentials: true
            })

            dispatch(addUser(response.data));
        } catch (err) {
            if (err.status === 401) {
                return navigate("/login")
            }
            console.log(err)
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Home;