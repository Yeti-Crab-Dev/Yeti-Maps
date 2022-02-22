import axios from "axios";
import QRCode from "qrcode.react";
import React from "react";

class QRCodeComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userName: '' 
        };
    }

    componentDidMount(){
        axios.get(`http://localhost:3000/api/user/${this.props.userID}`).then(result=>{
            if(result.status ===200){
                this.setState({userName:result.data.name});
            }
        });
    }

    render(){
        return(<div>
            <QRCode value={`Hello from ${this.state.userName}`} />
        </div>)
    };
}

export default QRCodeComponent;