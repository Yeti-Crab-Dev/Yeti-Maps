import React from 'react';
import { Form } from './Form.jsx'
import GoogleMap from './GoogleMap'
import ShowPost from './ShowPost.jsx'
import SignIn from './SignIn.jsx';
import { SignUp } from './SignUp.jsx';
import { SignOut } from './SignOut.jsx';
import { hot } from 'react-hot-loader/root';
import QRCode from 'qrcode.react';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false,
            comments: [],
        };
        this.handleLoggedIn = this.handleLoggedIn.bind(this);
        this.handleUpdateComments = this.handleUpdateComments.bind(this);
        this.onMarkerClick = this.onMarkerClick.bind(this);
    }

    componentDidMount(){
        if(localStorage.getItem("id")!==null){
            this.setState({logged:!this.state.logged});
        }
        this.handleUpdateComments();
    }

    componentDidUpdate(previousProps, previousState){
        console.log('Previous State')
        console.log(previousState)
        console.log('New State')
        console.log(this.state.comments)
        if(previousState.comments.length !== this.state.comments.length){
            this.handleUpdateComments();
        }
    }

    async onMarkerClick(data){
        const lat = data.latLng.lat();
        const lng = data.latLng.lng();
        try{
            const resDB = await axios.get(`http://localhost:3000/api/filteredcomments/${lat}/${lng}`);
            const arrOfFilteredComments = [];
            console.log(resDB.data)
            for( let i = 0; i < resDB.data.length; i++){
                arrOfFilteredComments.push(resDB.data[i]);
            }
            this.setState({comments:[...arrOfFilteredComments]});
            
        }catch(err){
            console.log('Error in get filtered pins : ' + err);
        }
    }

    handleLoggedIn() {
        //console.log('Just to check if we are here ')
        this.setState({ logged: !this.state.logged });
    }

    async handleUpdateComments() {
        try {
            const response = await fetch("http://localhost:3000/api/comments");
            const jsonData = await response.json();
            this.setState({comments:[...jsonData]});
            //setComments(jsonData);
        } catch (err) {
            console.log(err.message)
        }
    }

    //const [isLogged, setLogged] = useState(false); 
    render() {
        console.log('Session')
        console.log(localStorage.getItem("id"))
        //functions
        return (
            <div>
                <QRCode value='OMG, how about that ???' />
                {this.state.logged && <div><Form handleUpdateComments={this.handleUpdateComments} />
                    <GoogleMap onMarkerClick={this.onMarkerClick}/>
                    <ShowPost comments={this.state.comments}/>
                    <SignOut />
                </div>}
                {!this.state.logged && <div><SignIn handleLoggedIn={this.handleLoggedIn} /> <SignUp /></div>}
            </div>
        )
    }
}

//Plan: add Google map in this file with nested React Router

export default App;