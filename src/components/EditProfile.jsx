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

    const inputClass = "w-full px-3 py-2 rounded-xl text-sm text-[#e8e6f7] border border-[#2e3a52] outline-none focus:border-[#534ab7] transition-colors";


    return (
        <div className="min-h-screen py-10 px-4 flex flex-col lg:flex-row items-stretch justify-center gap-10"
            style={{ background: "#1a1f2e" }}>

            {/* Edit Form — h-full so it stretches to match card height */}
            <div className="w-96 rounded-2xl border border-[#2e3a52] p-6 flex flex-col"
                style={{ background: "#242b3d" }}>

                <h2 className="text-xl font-medium text-center text-[#cecbf6] mb-6">Edit Profile</h2>

                <div className="flex-1 flex flex-col gap-4">
                    {[
                        { label: "First Name", value: firstName, setter: setFirstName, type: "text" },
                        { label: "Last Name", value: lastName, setter: setLastName, type: "text" },
                        { label: "Photo URL", value: photoURL, setter: setPhotoURL, type: "text" },
                        { label: "Age", value: age, setter: setAge, type: "number" },
                        { label: "Gender", value: gender, setter: setGender, type: "text" },
                        { label: "About", value: about, setter: setAbout, type: "text" },
                    ].map(({ label, value, setter, type }) => (
                        <div key={label}>
                            <label className="block text-xs text-[#888] mb-1">{label}</label>
                            <input
                                type={type}
                                value={value || ""}
                                onChange={(e) => setter(e.target.value)}
                                className="w-full px-3 py-2 rounded-xl text-sm text-[#e8e6f7] border border-[#2e3a52] outline-none focus:border-[#534ab7] transition-colors"
                                style={{ background: "#1a1f2e" }}
                            />
                        </div>
                    ))}
                </div>

                {error && <p className="text-red-400 text-sm mt-3">{error}</p>}

                {/* Save button pushed to bottom */}
                <button
                    onClick={saveUser}
                    className="w-full py-2 rounded-xl text-sm font-medium bg-[#534ab7] text-[#e8e6f7] hover:bg-[#7f77dd] transition-colors mt-6">
                    Save Profile
                </button>
            </div>

            {/* Card — also stretched */}
            <div className="flex items-stretch">
                <UserCard user={{ firstName, lastName, about, age, photoURL, gender }} />
            </div>

            {/* Toast */}
            {showToast && (
                <div className="toast toast-top toast-center z-50">
                    <div className="px-4 py-3 rounded-xl text-sm font-medium text-[#9fe1cb] border border-[#1d9e75]"
                        style={{ background: "#0f6e56" }}>
                        Profile updated successfully!
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditProfile;