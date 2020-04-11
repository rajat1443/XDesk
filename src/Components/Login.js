import React, { Component } from 'react';
import LoginView from '../Views/LoginView';
// import {fetch} from '../modules/httpServices';
import { cloneDeep } from 'lodash';
import { constants } from '../modules/constants'
// import xebia_logo from '../Views/xebia_logo.png';
// import {Link} from 'react-router-dom';
import axios from 'axios';
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            message: '',
            email: '',
            password: '',
            isValid: true
        }
    }

    componentDidMount = () => {
        // this.redirecttoTicketList();
        // // // Simple POST request with a JSON body using fetch
        console.log('hell');
        const data = { "email": "rajat.sharma@xebia.com", "password": "hello1" };
        fetch('https://xdesk.herokuapp.com/ticket-tool/v1/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-channel': 'WEB'
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    onInputChange = (payload) => {
        this.setState({ ...this.state, ...payload, isValid: true });

    }
    onFormSubmit = (e) => {
        e.preventDefault();
        this.setState(this.validateCredentials);
    }

    validateCredentials = () => {
        const { email, password } = this.state;

        //https://xdesk.herokuapp.com/ticket-tool/v1/users/login    
        //https://xdesk.herokuapp.com/ticket-tool/v1/users/login
        const data = { "email": email, "password": password };
        // console.log(email, password)
        console.log(JSON.stringify(data))
        fetch('https://xdesk.herokuapp.com/ticket-tool/v1/users/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-channel': 'WEB'
                },
                body: JSON.stringify(data),
            })
            .then((response) => {
                console.log(response.json());
            })
            .then((data) => {
                console.log('Success:');
            })

            .catch((error) => {
                console.error('Error:', error);
            });
        // const { status, message } = response;
        // const _state = cloneDeep(this.state);

        // if (status === 202) {
        //     _state.message = message;
        //     _state.isValid = true;
        //     console.log(response.token)
        //     window.localStorage.setItem('Token', response.token);
        //     window.localStorage.setItem('email', email);
        // } else {
        //     _state.message = message;
        //     _state.isValid = false;
        //     window.localStorage.removeItem('email');
        //     window.localStorage.removeItem('Token');
        // }

        // this.setState(_state, this.redirecttoTicketList);
    }




    redirecttoTicketList = () => {
        const token = window.localStorage.getItem('Token');
        console.log(token)

        if (token != null) {
            this.props.history.push('/TicketList');
        }
    }


    render() {
        return (
            <LoginView  {...
                {
                    ...this.state,
                    onInputChange: this.onInputChange,
                    onFormSubmit: this.onFormSubmit
                }} />
        )
    }
}

export default Login;