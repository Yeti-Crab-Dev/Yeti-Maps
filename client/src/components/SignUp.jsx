import React, {Fragment, useState} from "react";
import axios from "axios";

const SignUp = (e) => {
	e.preventDefault
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const onSubmit = () => {
		body = { username, password }
		axios.post('http://localhost3000/api/idk', body)
		.then(res => console.log(res));
	}

	return (
		<Fragment>
			<div>
				<form onSubmit={onSubmit}>
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