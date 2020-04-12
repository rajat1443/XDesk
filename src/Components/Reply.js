import React, { Component } from 'react';
import TicketReplyNav from '../Views/ticketReplyNav';
import TicketReplyBottomContainer from '../Views/ticketReplyBottomContainer';

class Reply extends Component {
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