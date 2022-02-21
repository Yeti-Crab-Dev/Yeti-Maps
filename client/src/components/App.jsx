import React from 'react';
import { Form } from './Form.jsx'
import GoogleMap from './GoogleMap'
import ShowPost from './ShowPost.jsx'
import SignIn from './SignIn.jsx';

const App = () => {

    return (
        <div>
            <h1></h1>
            <SignIn />
            <Form />
            <GoogleMap />
            <ShowPost />
            {/* {loggedUser &&  <div><Form />
            <GoogleMap />
            <ShowPost /> </div>}
            {!logged && <SignIn />} */}
        </div>
    )

}

//Plan: add Google map in this file with nested React Router

export default App;