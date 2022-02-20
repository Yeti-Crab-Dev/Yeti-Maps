import React from 'react';
import { Form } from './Form.jsx'
import GoogleMap from './GoogleMap'
import ShowPost from './ShowPost.jsx'

const App = () => {
    return (
        <div>
            <h1></h1>
            <Form />
            <GoogleMap />
            <ShowPost />
        </div>
    )

}

//Plan: add Google map in this file with nested React Router

export default App;