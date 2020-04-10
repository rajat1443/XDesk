import React, {Component} from 'react';
import LoginView from '../Views/LoginView';
import {fetch} from '../modules/httpServices';
import {cloneDeep} from 'lodash';
// import xebia_logo from '../Views/xebia_logo.png';
// import {Link} from 'react-router-dom';
import axios from 'axios';
class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            isLoading: false,
            message:   '',
            username:  '',
            password:  '',
            isValid:   true
        }
    }
    
    componentDidMount= () => {
       this.redirecttoTicketList();
    }

    onInputChange = (payload) => {
        this.setState({...this.state,...payload, isValid:true})
    }
    onFormSubmit= (e)=>{
        e.preventDefault();
        this.setState(this.validateCredentials);
    }

    validateCredentials= () => {
        const {username,password} = this.state;
       

        fetch.post( {url:'https://xdesk.herokuapp.com/ticket-tool/v1/users/login', requestBody: {username,password}, callbackHandler :(response)=>{
            const {status,message,payload} = response;
            const _state= cloneDeep(this.state);

            if(status === 'success'){
                _state.message=message;
                _state.isValid=true;
                window.localStorage.setItem('Token',payload.token);
                window.localStorage.setItem('username',username);
            } else{
                _state.message=message;
                _state.isValid=false;
                window.localStorage.removeItem('username');
                window.localStorage.removeItem('Token');
            }

            this.setState(_state, this.redirecttoTicketList)
        } 
    
    } );
};

    redirecttoTicketList= ()=>{
        const token= window.localStorage.getItem('Token');
        console.log(token)

        if(token!= null){
            this.props.history.push('/TicketList');
        }
    }


    render(){
        return(
           <LoginView  { ...
           {...this.state, 
            onInputChange: this.onInputChange,
            onFormSubmit :this.onFormSubmit 
            }} />
        )
    }
}

export default Login;