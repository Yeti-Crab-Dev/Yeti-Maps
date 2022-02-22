import React, {Fragment, useState} from "react";
import axios from "axios";


const ShowMembers = () => {

	const [user, setUsers] = useState([]);
    // iterate

    const getAllUser = () => {
        axios.get('http://localhost:3000/api/users')
        .then(result => {
			setUsers(result.data.map(el => {
				return (
					<li>{el.name}</li>
				)
			}))
		})
    }

    // console.log(`this is our userNames constant`, user)

    getAllUser();
	
	return (
        <Fragment>
            <div>
                <h1>Users</h1>
				<ul>
					{user}
				</ul>
                
            </div>
        </Fragment>


	)
}

export { ShowMembers };