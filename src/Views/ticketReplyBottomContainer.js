import React from 'react';

const TicketReplyBottomContainer = () => {
    const currentDate = new Date();
    return(
        <div className="ticket-reply-bottom-container">
            <div className="search-field-wrapper">
                <div className="search-field-text-wrapper">
                    <span>Tickets/Xebia</span>
                </div>

                <div className="input-field-wrapper">
                    <input type="text" id="search-tickets" name="search-tickets" />
                </div>
            </div>
            <div className="reply-flexbox">
                <div className="ticket-reply-bottom-container-left-side">
                    <div className="ticket-heading">
                        <h2>Test</h2>
                    </div>

                    <div className="date-reply-comment-wrapper">
                        
                            <div className="reply-wrapper-left-side">
                                <div className="date-time-wrapper">
                                {currentDate.toDateString()}
                                </div>
                            </div>

                            <div className="reply-wrapper-right-side">
                                
                                <div className="reply-child-left-side">
                                <i class="fa fa-reply"></i>
                                <p>Reply</p>
                                </div>

                                <div className="reply-child-right-side">
                                    <i class="fa fa-comment"></i>
                                    <p>Comment</p>
                                </div>
                            </div>
                        
                    </div>

                    
                    <div className="comment-box-wrapper">
                        <div className="sqaure-profile-identifier-wrapper"></div>
                        <textarea form="reply-form" id="reply" cols="50" rows="8"></textarea>
                    </div>
                    <div className="ticket-reply-form-wrapper">
                            <form id="reply-form">                        
                            <div className="attach-file-wrapper">
                                <i class="material-icons">attachment</i>
                                <p>Attach a File <span className="black-text">(Upto 20 MB)</span></p>
                            </div>
                            <div className="buttons-wrapper">
                                <input type="submit" value="Send" />
                                <button> Save Draft</button>
                                
                                <span className="cancel-wrapper">
                                    <button> Cancel </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            
            <div className="ticket-reply-bottom-container-right-side">
                
            <div className="ticket-brief-information-wrapper">
                        <div className="add-ticket-button">
                            <button>Add Ticket</button>
                        </div>

                        <div className="edit-ticket-properties-wrapper">
                            <p>Ticket Properties</p>
                            <a>Edit</a>
                        </div>
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
            </div>
            </div>
        
    )
}

export default TicketReplyBottomContainer;