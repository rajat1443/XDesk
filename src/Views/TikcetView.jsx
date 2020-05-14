import React, { useState } from 'react';
// import TikcetListNav from './TicketListNav';
import arrow from '../images/arrow.png';
import globe from '../images/globe.png';
import clock from '../images/clock.png';
import chat from '../images/chat.png';
import { Link } from 'react-router-dom';
import reply from '../images/reply.png';


const TicketView = (payload) => {
    const [display, isVisible] = useState('id_conversation');
    const [ticketStatusPopup, shouldDisplay] = useState('no');
    const [styleValues, styleChanger] = useState({ color: "", fontSize: "" });
    const { ticketData, ticketReplies, changeSelectValue, changeStatusValue, resolutionChangeHandler, resolutionSubmitHandler, statusHandler, resolutionText, allAdminUsers } = payload;
    const [displayreplybox, showreplybox] = useState(false);

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

    const selectMapper = (mapValues) => {
        mapValues.map((option) => {
            return (
                <option key={option.departmentId} value={option.emailId}>{option.name}</option>
            )
        })
    }

    const showhidereplybox = () => showreplybox(!displayreplybox);



    return (
        <div className="TicketDetails-container" >
            {ticketStatusPopup === 'yes' ?
                <div className="popup-background-wrapper">
                    <div className="status-popup-wrapper">
                        <div className="close-wrapper">
                            [X]
                         </div>
                        <p>Do you want to close the ticket?</p>
                        <div className="buttons-wrapper">
                            <button type="submit" onClick={statusHandler}>Yes</button>
                            <button type="submit" onClick={() => { shouldDisplay('no') }}>No</button>
                        </div>
                    </div>
                </div>
                : null}
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
                        <div className="ticket-snapshot-left-border"></div>
                        <div className="snapshot-heading-wrapper">
                            <i className="fa fa-globe">
                                <span className="date-text">
                                    {creationTime.getDay() + ' ' + creationMonth}
                                </span>
                            </i>
                            <span>{ticketData.displayName}</span>
                        </div>
                        <div className="ticket-snapshot-information-wrapper">
                            <p> {ticketData.subject}</p>
                        </div>
                    </div>
                </div>
                <div className="ticket-brief-wrapper">
                    <div className="ticket-brief-heading-wrapper">
                        <div className="ticket-brief-heading-horizontal-line-wrapper"></div>
                        <h3> {ticketData.displayName} <i className="fa fa-globe"></i></h3>
                        <span>{ticketData.emailId}</span>

                    </div>

                    <div className="ticket-brief-information-wrapper">
                        <div className="assigned-officer-wrapper">
                            <span>Assigned To</span>
                            <div className="profile-wrapper">

                                <select value={ticketData.assignedTo} onChange={(e) => { changeSelectValue(e.target.value, ticketData.status) }}>
                                    {allAdminUsers ?
                                        allAdminUsers.map((admin) => {
                                            return (
                                                <option key={admin.emailId} value={admin.emailId}>{admin.name}</option>
                                            )
                                        })
                                        : null}
                                </select>
                                {/* <span>{ticketData.assignedTo}</span>     */}
                            </div>
                        </div>

                        <div className="status-wrapper">
                            <span>Status</span>
                            <select className="ticket-brief-status-select" value={ticketData.status} onChange={(e) => { changeStatusValue(e.target.value) }}>
                                <option value="OPEN">OPEN</option>
                                <option value="CLOSED">CLOSED</option>
                            </select>
                            {/* <span>{ticketData.status}</span> */}
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
                            <img src={globe} alt="nothing much here" width="30px" height="30px" />
                        </div>
                        <div className="selected-ticket-heading-wrapper">
                            <div className="id-and-subject-wrapper">
                                <div className="subject-left-side-wrapper">
                                    <p>{'#' + ticketData.id} {ticketData.subject}</p>
                                </div>
                                <div className="subject-right-side-wrapper">
                                    <img className="reply-image" src={reply} alt="nothing here" width="30px" height="30px"  />
                                    {/* <Link to={'/ticketlist/' + ticketData.id}> */}
                                        <img className="chat-image" src={chat} alt="nothing here" width="30px" height="30px" onClick={showhidereplybox} />
                                    {/* </Link> */}
                                </div>
                            </div>
                            <div className="time-wrapper">
                                <img src={clock} alt="clock icon here" width="15px" height="15px" />
                                <p>{creationTime.getDay() + ' ' + creationMonth}</p>
                            </div>
                        </div>
                    </div>
                    <div className="ticket-details-sub-nav-wrapper">
                        <div className="conversation-wrapper" onClick={() => isVisible('id_conversation')} style={display === 'id_conversation' ? { color: "blue", fontSize: "11px", fontWeight: "bolder" } : null}> Conversation</div>

                        <div className="resolution-wrapper" onClick={() => isVisible('id_resolution')} style={display === 'id_resolution' ? { color: 'blue', fontSize: "11px", fontWeight: "bolder" } : null}>resolution</div>
                        <div className="time-entry-wrapper">time-entry</div>
                        <div className="attachment-wrapper">attachment</div>
                        <div className="activity-wrapper">activity</div>
                        <div className="approval-wrapper">approval</div>
                        <div className="history-wrapper">history</div>
                    </div>

                    {/* <form>
                            <textarea rows="10" cols="50"></textarea>
                            <button>submit</button>
                        </form> */}
                    {display === 'id_conversation' ? <React.Fragment>
                        <div className="total-ticket-details-wrapper">
                            {displayreplybox === true ? 
                            <React.Fragment>
                                <div class="comment-box-wrapper">
                                    <textarea form="reply-form" id="reply" cols="50" rows="8" placeholder="Please add a reply.Note: This will send an email to the user who raised the ticket"></textarea>
                                </div>
                                <div class="buttons-wrapper">
                                    <input type="submit" value="Send"></input>
                                    <button> Save Draft</button>
                                    <span class="cancel-wrapper">
                                        <button> Cancel </button>
                                    </span>
                                </div>
                            </React.Fragment> : null}
                            <div className="name-wrapper">
                                <p className="username-wrapper">{ticketData.emailId} <span className="details-date-wrapper">{creationTime.getDay() + ' ' + creationMonth} {}</span></p> <br />
                                <p className="ticket-description">{ticketData.description}</p>
                            </div>
                            <div className="ticket-replies-wrapper">
                                {
                                    ticketReplies ? ticketReplies.map((reply) => {
                                        const replyCreatedOn = new Date(reply.createdOn);

                                        return (
                                            <div className="individual-reply-wrapper" key={reply.id}>
                                                <div className="reply-heading-wrapper">
                                                    <div className="profile-wrapper"></div>
                                                    <span className="reply-createdOn-wrapper"> {replyCreatedOn.getHours()} : {replyCreatedOn.getMinutes()}} </span>
                                                </div>
                                                <div className="reply-text-wrapper">{reply.text}</div>
                                            </div>
                                        )
                                    })
                                        : <p> NO activity here yet</p>
                                }
                            </div>
                        </div>
                    </React.Fragment> : null}


                    {display === 'id_resolution' ? ticketData.resolution ? <React.Fragment>
                        <div>
                            {ticketData.resolution}
                        </div>
                    </React.Fragment> : <React.Fragment>
                            <div className="resolution-wrapper">
                                <form id="resolution-form" onSubmit={resolutionSubmitHandler}>
                                    <textarea form="resolution-form" rows="7" cols="99" placeholder="Enter the resolution here..." onChange={(e) => { resolutionChangeHandler(e.target.value) }}></textarea>
                                    <input type="submit" onClick={() => resolutionText ? shouldDisplay('yes') : null} value="Send" />
                                </form>

                            </div>
                        </React.Fragment> : null}

                    {/* <div className="replies-wrapper">
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
                        </div> */}

                </div>

            </div>
        </div >
    )
}


export default TicketView;