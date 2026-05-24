import { useState } from "react";
import UserCard from "./UserCard";
import { BASE_URL } from "../utilis/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utilis/userSlice";
import axios from "axios";

const EditProfile = ({ user }) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [photoURL, setPhotoURL] = useState(user.photoURL);
    const [age, setAge] = useState(user.age);
    const [about, setAbout] = useState(user.about);
    const [gender, setGender] = useState(user.gender);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const [showToast, setShowToast] = useState(false);

    const saveUser = async () => {
        setError("");
        try {
            const res = await axios.post(BASE_URL + "/profile/edit",
                { firstName, lastName, age, about, photoURL, gender },
                { withCredentials: true });
            dispatch(addUser(res?.data?.data));
            setShowToast(true);
            setTimeout(() => { setShowToast(false) }, 3000);
        } catch (err) {
            setError(err?.response?.data);
        }
    }

    return (
        <div className="min-h-screen bg-base-200 flex flex-col lg:flex-row items-center justify-center gap-10 p-10">
            <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="card bg-neutral text-neutral-content w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center text-2xl">Edit Profile</h2>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-neutral-content">First Name</span>
                        </label>
                        <input
                            type="email"
                            value={firstName}
                            className="input input-bordered w-full text-base-content"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-neutral-content">Last Name</span>
                        </label>
                        <input
                            type="text"
                            value={lastName}
                            className="input input-bordered w-full text-base-content"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-neutral-content">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            value={photoURL}
                            className="input input-bordered w-full text-base-content"
                            onChange={(e) => setPhotoURL(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-neutral-content">Age</span>
                        </label>
                        <input
                            type="number"
                            value={age}
                            className="input input-bordered w-full text-base-content"
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-neutral-content">Gender</span>
                        </label>
                        <input
                            type="text"
                            value={gender}
                            className="input input-bordered w-full text-base-content"
                            onChange={(e) => setGender(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-neutral-content">About</span>
                        </label>
                        <input
                            type="text"
                            value={about}
                            className="input input-bordered w-full text-base-content"
                            onChange={(e) => setAbout(e.target.value)}
                        />
                    </div>
                    <p className="text-red-500">{error}</p>
                    <div className="card-actions mt-4">
                        <button className="btn btn-primary w-full" onClick={saveUser}>Save Data</button>
                    </div>
                </div>
            </div>
        </div>
            <UserCard user={{ firstName, lastName, about, age, about, photoURL, gender }} />
            { showToast && <div className="toast toast-top toast-center">
                <div className="alert alert-success">
                    <span>Profile Data updated successfully.</span>
                </div>
            </div>}
        </div>

    )
}

export default EditProfile;