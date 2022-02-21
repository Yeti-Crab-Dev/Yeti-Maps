import React, {Fragment, useState} from "react";
import axios from "axios";

const SignUp = () => {
	
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		const body = { username, password , name };
		axios.post('http://localhost:3000/api/createuser', body)
		.then(res =>{
			if(res.data.OK){
				console.log('LOGGED IN')
			}else console.log('WRONG')
			
		})
	}

	return (
		<Fragment>
			<div>
				<form onSubmit={onSubmit}>
					<label>Enter your name</label>
						<input type="text" onChange={e => setName(e.target.value)}/>

					<label>Enter a Username</label>
						<input type="text" onChange={e => setUsername(e.target.value)}/>
					
					<label>Enter a password</label>
						<input type="text" onChange={e => setPassword(e.target.value)} />
					
					
					<button>Sign Up</button>
				</form>
			</div>
		</Fragment>
	)
}

export { SignUp };