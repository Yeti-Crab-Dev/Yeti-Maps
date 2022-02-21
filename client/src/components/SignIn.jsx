import React, {useState, useEffect} from 'react';

const SignIn = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = e => {
        e.preventDefault();
        console.log(username, password)
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