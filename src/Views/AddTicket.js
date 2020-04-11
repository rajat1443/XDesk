import React from 'react';
import valid from '../validating-ticket.png';
function AddTicket(){
    return(
        <div className="add-tickets-bottom-wrapper">
            <div className="add-ticket-heading-wrapper">
                <div className="add-ticket-icon-wrapper">
                    <img src={valid} alt="nothing much here" />
                </div>
                <div className="add-ticket-text-wrapper">
                    <h1>Add Ticket</h1>
                    <select id="template-selector">
                    <option  selected>  Choose ticket template </option>
                    </select>
                </div>
            </div>

            
            <div className="add-ticket-form-wrapper">
                <form>
                    <div className="ticket-information-text-wrapper">
                        <span> Ticket Information</span>
                    </div>

                    <div className="contact-email-wrapper">
                        <div className="label-wrapper">
                            <label className="red-text">Contact</label>
                            <label> Email</label>
                        </div>
                        <div className="input-wrapper">
                            <select id="contact-select">
                                <option defaultValue="none" selected >-None-</option>
                            </select>

                            <select id="email-select">
                                <option defaultValue="none" selected >-None-</option>
                            </select>
                        </div>

                    </div>

                    <div className="location-phone-wrapper">
                        <div className="label-wrapper extra-phone">
                            <label className="red-text"> Location</label>
                            <label> Phone</label>
                        </div>
                        <div className="input-wrapper">
                            <select id="location-select">
                                <option defaultValue="none" selected >-None-</option>
                            </select>

                            <select id="phone-select">
                                <option defaultValue="none" selected >-None-</option>
                            </select>
                        </div>
                        
                    </div>

                    <div className="department-sub-issue-wrapper">
                        <div className="label-wrapper extra-issue">
                                <label className="red-text"> Department</label>
                                <label className="red-text"> Sub Issue</label>
                        </div>

                        <div className="input-wrapper">
                            <select id="department-select">
                                <option defaultValue="none" selected >-None-</option>
                            </select>

                            <select id="sub-issue-select">
                                <option defaultValue="none" selected >-None-</option>
                            </select>
                        </div>
                        
                       
                    </div>

                    <div className="subject-wrapper">
                        <div className="label-wrapper">
                                <label>Subject</label>
                        </div>

                        <div className="input-wrapper">
                            <input type="text" name="Subject" id="subject" />
                        </div>                        
                    </div>

                    <div className="classification-priority-wrapper">
                         <div className="label-wrapper extra-priority">
                            <label> Classification</label>
                            <label> Priority</label>
                        </div>

                        <div className="input-wrapper">
                            <select id="classification-select">
                                <option defaultValue="none" selected >-None-</option>
                            </select>

                            <select id="priority-select">
                                <option defaultValue="none" selected >-None-</option>
                            </select>
                        </div>
                    </div>

                    <div className="description-wrapper">
                        <div className="label-wrapper">
                             <label> Description</label>
                        </div>

                        <div className="input-wrapper">
                            <input type="text" name="description" id="description" />
                        </div>
                    </div>

                    <div className="status-owner-wrapper">
                        <div className="label-wrapper extra-owner">
                            <label className="red-text"> Status</label>
                            <label> Ticket Owner</label>
                        </div>

                        <div className="input-wrapper">
                            <select id="status-select">
                                <option defaultValue="none" selected >-None-</option>
                            </select>

                            <select id="owner-select">
                                <option defaultValue="none" selected >-None-</option>
                            </select>
                        </div>
                    </div>
                    <div className="button-wrapper">
                        <button type="submit" id="submit">Submit</button>
                        <button type="submit" id="cancel">Cancel</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default AddTicket;