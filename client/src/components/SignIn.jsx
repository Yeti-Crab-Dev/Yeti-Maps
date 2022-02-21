import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SignIn = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = e => {
        e.preventDefault();
        const body = {username, password};
        axios.post('http://localhost:3000/api/userlogin', body)
        .then(res => console.log(res))
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <input 
                type="text" 
                placeholder="username"
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                />

                <input 
                type="password" 
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
                <input 
                type="submit" 
                />
        </form>
    )
}

export default SignIn;