import React,{Component} from 'react';
import TicketReplyNav from '../Views/TicketReplyNav';
import TicketReplyBottomContainer from '../Views/TicketReplyBottomContainer';

class Reply extends Component{
    render() {
        return (
            <div className="Ticket-Reply-Container">
            <TicketReplyNav />
            <TicketReplyBottomContainer />
            </div>
            
        )
    }
}

export default Reply;