import React, { Fragment, useState } from "react";
import axios from "axios";

const SignUp = () => {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		const body = { username, password, name };
		axios.post('http://localhost:3000/api/createuser', body)
			.then(res => {
				if (res.data.OK) {
					console.log('LOGGED IN')
				} else console.log('WRONG')

			})
	}

	return (

		<section className="vh-100">
			<div className="container-fluid h-custom">
				<div className="row d-flex justify-content-center align-items-center h-100">
					<div className="col-md-9 col-lg-6 col-xl-5">
						<img src="data:image/jpeg;base64,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" class="img-fluid"
							alt="Sample image" />
					</div>
					<div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

						<form onSubmit={onSubmit}>
							<div>
							<div className="form-outline mb-4">
									<input type="text" id="form3Example3" className="form-control form-control-lg"
										placeholder="Name"
										onChange={e => setName(e.target.value)}
										/>
								</div>
								<div className="form-outline mb-4">
									<input type="text" id="form3Example3" className="form-control form-control-lg"
										placeholder="Username"
										onChange={(e) => setUsername(e.target.value)} />
								</div>
								<div className="form-outline mb-3">
									<input type="password" id="form3Example4" className="form-control form-control-lg"
										placeholder="Password"
										value={password}
										onChange={(e) => setPassword(e.target.value)} />
								</div>
							</div>


							<div className="text-center text-lg-start mt-4 pt-2">
								<button className="btn btn-primary btn-block fa-lg mb-3" type="submit">Sign Up</button>
							</div>
						</form>

					</div>
				</div>
			</div>

		</section>
	)
}

export { SignUp };