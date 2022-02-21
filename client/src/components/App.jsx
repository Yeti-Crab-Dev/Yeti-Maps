import React from 'react';
import { Form } from './Form.jsx'
import GoogleMap from './GoogleMap'
import ShowPost from './ShowPost.jsx'
import SignIn from './SignIn.jsx';
import { SignUp } from './SignUp.jsx';
import { hot } from 'react-hot-loader/root';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logged : false
        };
        this.handleLoggedIn = this.handleLoggedIn.bind(this);
    }



    handleLoggedIn(){
        //console.log('Just to check if we are here ')
        this.setState({logged: !this.state.logged});
    }

    //const [isLogged, setLogged] = useState(false); 
    render() {
        //functions
    return (
        <div>
            {/* <SignIn />
            <SignUp />
            <Form />
            <GoogleMap />
            <ShowPost /> */}
            {this.state.logged &&  <div><Form />
            <GoogleMap />
            <ShowPost /> </div>}
            {!this.state.logged && <div><SignIn handleLoggedIn={this.handleLoggedIn} /> <SignUp /></div>}
        </div>
    )
     }
}

//Plan: add Google map in this file with nested React Router

export default App;