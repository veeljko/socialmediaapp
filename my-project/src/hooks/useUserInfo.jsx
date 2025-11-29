

export const useUserInfo = () => {

    const getUserInfo = async (info, setUser) => {
        if (!info) {
            return;
        }
        const res = await fetch("http://localhost:5000/api/userinfo", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${info}`,
            },
        });

        const data = await res.json();
        if (res.ok){
            setUser(data);
        }
        else return new Error("Unable to get user information");
    };

    return { getUserInfo };
};
