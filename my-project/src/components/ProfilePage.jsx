import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import {useProfileInfo} from "../hooks/useProfileInfo.jsx";

function ProfilePage() {
    const { username } = useParams();
    const { getProfileInfo } = useProfileInfo();
    const [profileInfo, setProfileInfo] = useState({});

    useEffect(() => {
        const fetch = async () => {
            await getProfileInfo(username, setProfileInfo);
        }

        fetch();
    }, [username]);
    console.log(username);
    console.log(profileInfo);

    return (<>
        <p>User : {profileInfo.username}</p>
        <img src={profileInfo.profilePictureUrl} alt={"profilePicture"} />
    </>)
}

export default ProfilePage;