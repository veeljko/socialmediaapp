import {useState} from "react";


function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function onChangePassword(e) {
        setPassword(e.target.value);
    }
    function onChangeUsername(e){
        setUsername(e.target.value);
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const res = await fetch("http://localhost:5000/api/register", {
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
        console.log(data);

        if (res.ok) {
            console.log("Register successful");
        } else {
            console.log("Register failed");
        }
    }

    return (<>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" onChange={(e) => onChangeUsername(e)}/><br/><br/>
            <label htmlFor="pass">Password:</label>
            <input type="password" id="pass" name="pass" onChange={(e) => onChangePassword(e)}/><br/><br/>
            <input type="submit" value="Submit"/>
        </form>
    </>)
}

export default RegisterForm;