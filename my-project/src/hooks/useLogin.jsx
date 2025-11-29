import {useAuthContext} from "./useAuthContext.jsx";


export const useLogin = () => {
    const {user, dispatch} = useAuthContext();

    const login = async(username, password) => {
        const res = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        });

        const data = await res.json();

        if (!res.ok) {
            console.log("Login unsuccessful");
        } else {
            console.log("Login successful");
            localStorage.setItem("token", data.token)
            dispatch({
                type: "LOGIN",
                payload: data.token
            })
        }
    }
    return {login};
}