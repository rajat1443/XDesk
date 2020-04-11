import React from 'react';
import TicketListNav from './TicketListNav';
import TicketListColumn from './TicketListColumn';

const TicketListView = () => {
    return (
        <div className="TicketListContainer">
            <TicketListNav />
            <div className="bottom-container">
                <TicketListColumn />
                <div className="ticket-container">
                    <div className="ticket-container-nav">
                        <div className="select-all-checkbox">
                            <input type="checkbox" />
                        </div>
                        <div className="headings-wrapper">
                            <div className="ticket-id-wrapper">
                                Ticket ID
                        </div>
                            <div className="subject-wrapper">
                                Subject
                        </div>
                            <div className="contact-name-wrapper">
                                Contact Name
                        </div>
                            <div className="customer-responded-time-wrapper">
                                Customer Responded Time
                        </div>
                            <div className="Due-date-wrapper">
                                Due Date
                        </div>
                            <div className="Status-wrapper">
                                Status
                        </div>
                            <div className="Ticket-owner-wrapper">
                                Ticket Owner
                        </div>
                            <div className="Channel-wrapper">
                                Channel
                        </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default TicketListView;