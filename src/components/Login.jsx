import { useState } from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../store/utils/constants";

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLoginClick = async () => {
        try {
            const res = await axios.post(BASE_URL +"login", {
                email, password
            }, { withCredentials: true })
            dispatch(addUser(res.data));
            return navigate("/")
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="h-full flex items-center justify-center my-5">
            <div className="card bg-base-100 w-96 shadow-sm justify-center">
                <div className="card-body justify-center">
                    <h2 className="card-title justify-center">Login</h2>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email ID</legend>
                        <input type="text" className="input" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Type here" />
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="text" className="input" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Type here" />
                    </fieldset>                    <div className="card-actions justify-center">
                        <button className="btn btn-primary justify-center" onClick={handleLoginClick}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;