import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../store/userSlice";

const Profile = () => {
    const user = useSelector(store => store.user);

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);
    const [photoURL, setPhotoURL] = useState(user.photoURL);
    const [about, setAbout] = useState(user.about);
    const dispatch = useDispatch();
    const [showtoast, setShowtoast] = useState(false);

    const handleSubmitClick = async () => {
        try {
            const response = await axios.patch(BASE_URL + "profile/edit", { firstName, lastName, age, gender, photoURL, about }, {
                withCredentials: true
            })
            dispatch(addUser(response.data));
            setShowtoast(true);

            setTimeout(() => {
                setShowtoast(false);
            }, 2000);
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <div className="h-full flex items-center justify-center my-5">
                <div className="card bg-gray-100 w-96 shadow-sm justify-center mx-5">
                    <div className="card-body justify-center">
                        <h2 className="card-title justify-center">Login</h2>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">First Name</legend>
                            <input type="text" className="input" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} placeholder="Type here" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Last Name</legend>
                            <input type="text" className="input" value={lastName} onChange={(e) => { setLastName(e.target.value) }} placeholder="Type here" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Age</legend>
                            <input type="text" className="input" value={age} onChange={(e) => { setAge(e.target.value) }} placeholder="Type here" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Gender</legend>
                            <input type="text" className="input" value={gender} onChange={(e) => { setGender(e.target.value) }} placeholder="Type here" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Photo URL</legend>
                            <input type="text" className="input" value={photoURL} onChange={(e) => { setPhotoURL(e.target.value) }} placeholder="Type here" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">About</legend>
                            <input type="text" className="input" value={about} onChange={(e) => { setAbout(e.target.value) }} placeholder="Type here" />
                        </fieldset>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary justify-center" onClick={handleSubmitClick}>Save Profile</button>
                        </div>
                    </div>
                </div>
                <UserCard user={{ firstName, lastName, age, gender, photoURL, about }} />
            </div>
            {showtoast && <div className="toast toast-top toast-center">
                <div className="alert alert-success">
                    <span>Profile saved successfully.</span>
                </div>
            </div>}
        </>
    )
}

export default Profile;