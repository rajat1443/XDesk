import React, { Component } from 'react';
import TicketListNav from '../views/headerView';
import TicketListColumn from '../views/sidebarView';
import TicketListView from '../views/ticketListingView';
import axios from 'axios';


class TicketList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            post: null
        }
    }

    componentDidMount() {
        // console.log(window.localStorage.getItem('Token'));
        const token = window.localStorage.getItem('Token');
        // console.log({token})
        const headers = {
            'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyYWphdC5zaGFybWFAeGViaWEuY29tIiwiZXhwIjoxNTg3NDQ2MTgxLCJpYXQiOjE1ODY1ODIxODEsImp0aSI6ImRjZDI0NmYzLTQwODAtNDE0Mi1hMjRkLTVjOWVjZWY0NGU2YyJ9.ytlQ5V_50YDXgshi12Ly2w2CxnxP8OEEdYg60twf2aWv_PY5HnyHh_fQ7ZgQbKVMx5JU1XKtls1-kOSFoCGhFA`,
            'x-access-channel': 'WEB'
        }

        console.log(headers)
        axios.get('https://xdesk.herokuapp.com/ticket-tool/v1/tickets?page=0&limit=2', { headers })
            .then(response => {
                console.log(response.data.result);
                this.setState({ post: response.data.result });

            })
            .catch(error => {
                console.log(error)
            })

    }

    individualTicketWrapper = () => {

        const posts = this.state;
        const postList = posts.length();
        console.log(postList);

    }

    render() {
        return (
            <TicketListView />
        )
    }
}

export default TicketList;