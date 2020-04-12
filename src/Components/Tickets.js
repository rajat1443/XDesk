import React, { Component } from 'react';
import TicketListNav from '../Views/TicketListNav';
import AddTicket from '../Views/addTicket';

class Tickets extends Component {
    render() {
        return (
            <div className="add-tickets-wrapper">
                <TicketListNav />
                <AddTicket />
            </div>

        )
    }
}

export default Tickets;