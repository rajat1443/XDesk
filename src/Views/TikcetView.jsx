import React from 'react';
// import TikcetListNav from './TicketListNav';
import arrow from '../images/arrow.png';
import globe from '../images/globe.png';
import clock from '../images/clock.png';
import chat from '../images/chat.png';
import { Link } from 'react-router-dom';
import reply from '../images/reply.png';
import replyContainer from './replyContainerView';
import { constants } from '../modules/constants';
// import TicketDetails from '../Components/TicketDetails';

const ticketView = (payload) => {

    const { ticketData, ticketReplies, changeSelectValue } = payload;
    const currentTime = Date.now()
    const creationTime = new Date(ticketData.creationTime);
    const daysBetween = new Date(currentTime - ticketData.creationTime);

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

    let isHidden = 'none'

    const toggleReplyDisplay = () => {
        if (isHidden === 'none') {
            isHidden = 'block';
        } else {
            isHidden = 'none';
        }
        console.log(isHidden)
    }
    const hello = () => {
        alert('hello');
    }


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
                                <select value='HR' onChange={(e) => { changeSelectValue(e.target.value) }}>
                                    <option value='admin@xebia.com'>Admin</option>
                                    <option value='hr@xebia.com'>HR</option>
                                    <option value='finance@xebia.com'>Finance</option>
                                </select>
                                <span>{ticketData.assignedTo}</span>
                            </div>
                        </div>

                        <div className="status-wrapper">
                            <span>Status</span>
                            <select className="ticket-brief-status-select-wrapper">
                                <option defaultValue>{ticketData.status}</option>
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
                    <div className="selected-ticket-header-wrapper">
                        <div className="web-icon-wrapper">
                            <img src={globe} alt="globe image here" width="30px" height="30px" />
                        </div>
                        <div className="selected-ticket-heading-wrapper">
                            <div className="id-and-subject-wrapper">
                                <div className="subject-left-side-wrapper">
                                    <p>{'#' + ticketData.id} {ticketData.subject}</p>
                                </div>
                                <div className="subject-right-side-wrapper">
                                    <img className="reply-image" src={reply} alt="nothing here" width="30px" height="30px" onClick={toggleReplyDisplay} />
                                    <Link to={'/replies/' + ticketData.id}>
                                        <img className="chat-image" src={chat} alt="nothing here" width="30px" height="30px" />
                                    </Link>
                                </div>
                            </div>
                            <div className="time-wrapper">
                                <img src={clock} alt="clock icon here" width="15px" height="15px" />
                                <p>{creationTime.getDay() + ' ' + creationMonth}</p>
                            </div>
                        </div>
                    </div>
                    <div className="ticket-details-sub-nav-wrapper">
                        <div className="conversation-wrapper">Conversation</div>
                        <div className="resolution-wrappe">resolution</div>
                        <div className="time-entry-wrapper">time-entry</div>
                        <div className="attachment-wrapper">attachment</div>
                        <div className="activity-wrapper">activity</div>
                        <div className="approval-wrapper">approval</div>
                        <div className="history-wrapper">history</div>
                    </div>
                    <div className="total-ticket-details-wrapper">
                        <form>
                            <textarea rows="10" cols="50"></textarea>
                            <button>submit</button>
                        </form>
                        <div className="name-wrapper">
                            <p className="username-wrapper">{ticketData.emailId} <span className="details-date-wrapper">{creationTime.getDay() + ' ' + creationMonth} {}</span></p> <br />
                            <p className="ticket-description">{ticketData.description}</p>
                        </div>
                        <div className="replies-wrapper">
                            <h1>Replies</h1>

                            {ticketReplies ?
                                ticketReplies.map((reply) => {

                                    return (
                                        <div className="reply-wrapper" key={reply.id}>
                                            {reply.text}
                                        </div>
                                    )
                                })
                                : console.log('nothing here')}
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}


export default ticketView;