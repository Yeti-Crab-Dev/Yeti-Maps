import React, {Fragment, useState} from "react";
import axios from "axios";


const ShowMembers = () => {

	const [user, setUsers] = useState([]);
    // iterate
    


    const getAllUser = () => {
        axios.get('http://localhost:3000/api/users')
        .then(result => {
			for (let i = 0; i < result.data.length; i++) {
				const el = result.data[i];
				setUsers
			}
		})
    }

    console.log(`this is our userNames constant`, user)

    // change userNames into <li> elements
    // for (let i = 0; i < userNames; i++) {

    // }

    getAllUser();
	
	return (
        <Fragment>
            <div>
                <h1>Users</h1>
				<ul>
					{user.map(member => {
                        <li>{member}</li>
                    })}
				</ul>
                
            </div>
        </Fragment>


	)
}

export { ShowMembers };