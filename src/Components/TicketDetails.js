import React,{Component} from 'react';
import TicketView from '../Views/TikcetView';
import axios from 'axios';

class TicketDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            tickets:null
        }
    }

    
    render() {
        return (
                <TicketView />
        )
    }
}

export default TicketDetails;