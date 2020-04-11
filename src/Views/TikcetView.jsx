import React from 'react';
import TikcetListNav from './TicketListNav';
import arrow from '../Icons/arrow.png'
// import TicketDetails from '../Components/TicketDetails';

function ticketView(){
    return(
        <div className="TicketDetails-container">
            <div className="ticket-details-nav-wrapper">
                <TikcetListNav/>
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
                                <i class="fa fa-globe"><span className="date-text">12 Feb</span></i>
                                <span>Mayank Mahajan</span>
                            </div>
                            <div className="ticket-snapshot-information-wrapper">
                               <p> Ticket Details Come Here Helod dkcaadmc
                                djdnca
                                cnk cacnjalcackla
                                </p> 
                            </div>
                        </div>
                </div>
                <div className="ticket-brief-wrapper">
                    <div className="ticket-brief-heading-wrapper">
                        <div className="ticket-brief-heading-horizontal-line-wrapper"></div>
                        <h3> Mayank Mahajan  <i class="fa fa-globe">
                            <span className="date-text">12 Feb</span></i>
                        </h3>
                        <span>xyz@xebia.com</span>
                        <span>Phone No. Comes here</span>
                    </div>

                    <div className="ticket-brief-information-wrapper">
                        <div className="assigned-officer-wrapper">
                            <span>Assigned To</span> 
                            <div className="profile-wrapper">
                                <div className="profile-picture-wrapper">
                                </div>
                                <span>Karan Verma</span>
                            </div> 
                        </div>

                        <div className="status-wrapper">
                            <span>Status</span>
                            <select className="ticket-brief-status-select-wrapper">
                                <option selected>Closed</option>
                            </select>
                        </div>

                        <div className="closed-time-wrapper">
                            <span>Closed Time</span>
                            <span className="date-time-wrapper"> 12 Feb time</span>
                        </div>

                        <div className="ticket-information-heading-wrapper">
                            <h4> Ticket Information</h4>
                        </div>

                        <div className="ticket-brief-location-wrapper">
                            <span className="red-text">Location</span>
                            <span className="city-text">Gurgaon</span>
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
                            <span>Human Resource</span>
                        </div>

                        <div className="ticket-brief-classifications-wrapper">
                            <span>Classifications</span>
                            <span>Problem</span>
                        </div>

                        <div className="ticket-brief-priority-wrapper">
                            <span>Priority</span>
                            <span>-None-</span>
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