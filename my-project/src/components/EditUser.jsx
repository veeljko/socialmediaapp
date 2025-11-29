import React, {useEffect, useState} from "react";
import { useUserInfo } from "../hooks/useUserInfo.jsx";
import {useAuthContext} from "../hooks/useAuthContext.jsx";

function EditUser() {
    const { token } = useAuthContext();
    const {getUserInfo} = useUserInfo();
    const [user, setUser] = useState({username:""});
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    useEffect(() => {
        const fetch = async () => {
            await getUserInfo(token, setUser);
        }
        fetch();
    }, [token])

    function handleUsernameChange(e) {
        setUser({...user, username: e.target.value});
    }
    function handleCurrentPasswordChange(e){
        setCurrentPassword(e.target.value);
    }
    function handleNewPasswordChange(e){
        setNewPassword(e.target.value);
    }

    async function handleSubmit(e){
        e.preventDefault()
        const res = await fetch("http://localhost:5000/api/edituser", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                username : user.username,
                oldpassword : currentPassword,
                newpassword : newPassword
            })
        });
        const data = await res.json();
        if (!res.ok){
            return new Error("Error editing user");
        }
        //console.log(data);

    }

    return (
        <div>
            <h2 className="">User Info</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={user.username}
                    onChange={handleUsernameChange}
                    placeholder="Username"
                /><br/><br/>

                <label htmlFor="pass">Current password:</label>
                <input
                    type="password"
                    id="currpass"
                    value={currentPassword}
                    onChange={handleCurrentPasswordChange}
                /><br/><br/>

                <label htmlFor="pass">New password:</label>
                <input
                    type="password"
                    id="newpass"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                /><br/><br/>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default EditUser;
