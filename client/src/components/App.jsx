import React from 'react';
import { Form } from './Form.jsx'
import GoogleMap from './GoogleMap'
import ShowPost from './ShowPost.jsx'
import SignIn from './SignIn.jsx';
import { SignUp } from './SignUp.jsx';
import { SignOut } from './SignOut.jsx';
import { hot } from 'react-hot-loader/root';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false,
            comments: [],
            signup: false,
        };
        this.handleLoggedIn = this.handleLoggedIn.bind(this);
        this.handleUpdateComments = this.handleUpdateComments.bind(this);
        this.signUpTrue = this.signUpTrue.bind(this);
    }

    componentDidMount(){
        this.handleUpdateComments();
    }

    componentDidUpdate(previousProps, previousState){
        if(previousState.comments.length !== this.state.comments.length){
            this.handleUpdateComments();
        }
    }

    handleLoggedIn() {
        //console.log('Just to check if we are here ')
        this.setState({ logged: !this.state.logged });
    }

    async handleUpdateComments() {
        console.log('Is it comming here')
        try {
            console.log('updating comments');
            const response = await fetch("http://localhost:3000/api/comments");
            const jsonData = await response.json();
            this.setState({comments:[...jsonData]});
            //setComments(jsonData);
        } catch (err) {
            console.log(err.message)
        }
    }

    signUpTrue () {
        this.setState({signup: !this.state.signup})
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
                {this.state.logged && <div><Form handleUpdateComments={this.handleUpdateComments} />
                    <GoogleMap />
                    <ShowPost comments={this.state.comments}/>
                    <SignOut />
                </div>}
                {!this.state.logged && !this.state.signup && <div><SignIn handleLoggedIn={this.handleLoggedIn} /> 
                <button className='register' onClick={() => this.signUpTrue()}>Register</button></div>}
                {!this.state.logged && this.state.signup && <div><SignUp handleLoggedIn={this.handleLoggedIn} /></div>}

            </div>
        )
    }
}

//Plan: add Google map in this file with nested React Router

export default App;