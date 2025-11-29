import {useState} from "react";
import {useAuthContext} from "../hooks/useAuthContext.jsx";
import {useLogin} from "../hooks/useLogin.jsx";
import {Navigate} from "react-router-dom";


function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useLogin();
    const {token} = useAuthContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    };


    return (<>
        {token ? (<Navigate to="/home" />) : (<>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
            /><br/><br/>

            <label htmlFor="pass">Password:</label>
            <input
                type="password"
                id="pass"
                onChange={(e) => setPassword(e.target.value)}
            /><br/><br/>

            <button type="submit">Submit</button>
        </form>
        </>)}
    </>);
}

export default LoginForm;
