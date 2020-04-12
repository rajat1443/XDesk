import React from 'react';
// import TikcetListNav from './TicketListNav';
import arrow from '../images/arrow.png';
// import TicketDetails from '../Components/TicketDetails';

const ticketView = (payload) => {
    const { ticketData } = payload;
    console.log(ticketData);

    const creationTime = new Date(ticketData.creationTime);
    const dueOn = new Date(ticketData.dueOn)
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var creationMonth = month[creationTime.getMonth()];

    var dueOnMonth = month[dueOn.getMonth()];

    return (
        <div className="TicketDetails-container">
            <div className="ticket-details-nav-wrapper">
                {/* <TikcetListNav /> */}
            </div>
            <div className="ticket-details-bottom-container">
                <div className="all-tickets-wrapper">
                    <div className="header-wrapper">
                        <div className="back-arrow-wrapper">
                            <img src={arrow} alt="back arrow here" />
                        </div>
                        <div className="all-tickets-header-text-wrapper">
                            All Tickets
                        </div>
                    </div>
                    <div className="ticket-snapshot-wrapper">

                        <div className="snapshot-heading-wrapper">
                            <i className="fa fa-globe">
                                <span className="date-text">
                                    {creationTime.getDay() + ' ' + creationMonth}
                                </span>
                            </i>
                            <span>{ticketData.emailId}</span>
                        </div>
                        <div className="ticket-snapshot-information-wrapper">
                            <p> {ticketData.subject}</p>
                        </div>
                    </div>
                </div>
                <div className="ticket-brief-wrapper">
                    <div className="ticket-brief-heading-wrapper">
                        <div className="ticket-brief-heading-horizontal-line-wrapper"></div>
                        <h3> {ticketData.emailId} <i className="fa fa-globe">
                            <span className="date-text">{creationTime.getDay() + ' ' + creationMonth}</span></i>
                        </h3>
                        <span>{ticketData.emailId}</span>
                        <span>Phone No. Comes here</span>
                    </div>

                    <div className="ticket-brief-information-wrapper">
                        <div className="assigned-officer-wrapper">
                            <span>Assigned To</span>
                            <div className="profile-wrapper">
                                <div className="profile-picture-wrapper">
                                </div>
                                <span>{ticketData.assignedTo}</span>
                            </div>
                        </div>

                        <div className="status-wrapper">
                            <span>Status</span>
                            <select className="ticket-brief-status-select-wrapper">
                                <option selected>{ticketData.status}</option>
                            </select>
                        </div>

                        <div className="closed-time-wrapper">
                            <span>Closed Time</span>
                            <span className="date-time-wrapper"> {dueOn.getDay() + ' ' + dueOnMonth}</span>
                        </div>

                        <div className="ticket-information-heading-wrapper">
                            <h4> Ticket Information</h4>
                        </div>

                        <div className="ticket-brief-location-wrapper">
                            <span className="red-text">Location</span>
                            <span className="city-text">{ticketData.location}</span>
                        </div>

                        <div className="ticket-brief-phone-wrapper">
                            <span>Phone</span>
                            <span className="phone-text">Phone No.</span>
                        </div>

                        <div className="ticket-brief-department-wrapper">
                            <span className="red-text">Department</span>
                            <span>Human Resource</span>
                        </div>

                        <div className="ticket-brief-sub-issue-wrapper">
                            <span className="red-text">Sub Issue</span>
                            <span>{ticketData.department}</span>
                        </div>

                        <div className="ticket-brief-classifications-wrapper">
                            <span>Classifications</span>
                            <span>{ticketData.classification}</span>
                        </div>

                        <div className="ticket-brief-priority-wrapper">
                            <span>Priority</span>
                            <span>{ticketData.subIssue}</span>
                        </div>

                        <div className="ticket-brief-product-name-wrapper">
                            <span>Product Name</span>
                        </div>

                    </div>

                </div>
                <div className="selected-ticket-details-wrapper">

                </div>

            </div>
        </div>
    )
}


export default ticketView;