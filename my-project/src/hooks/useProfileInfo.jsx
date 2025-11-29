export const useProfileInfo = () => {

    const getProfileInfo = async (username, setProfileInfo) => {
        try {
            const res = await fetch(`http://localhost:5000/api/user/${username}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            const data = await res.json();
            console.log(data);
            if (res.ok) {
                setProfileInfo(data);
            } else {
                throw new Error(data.message || "Unable to get user information");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return { getProfileInfo };
};
