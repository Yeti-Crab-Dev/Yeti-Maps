import React from 'react';
import { Form } from './Form.jsx'
import GoogleMap from './GoogleMap'
import ShowPost from './ShowPost.jsx'
import SignIn from './SignIn.jsx';
import { SignUp } from './SignUp.jsx';

const App = () => {

    //const [isLogged, setLogged] = useState(false); 
    
    return (
        <div>
            <SignIn />
            <SignUp />
            <Form />
            <GoogleMap />
            <ShowPost />
            {/* {isLogged &&  <div><Form />
            <GoogleMap />
            <ShowPost /> </div>}
            {!isLogged && <SignIn />} */}
        </div>
    )

}

//Plan: add Google map in this file with nested React Router

export default App;