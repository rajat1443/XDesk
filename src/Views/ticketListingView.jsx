import React from 'react';

const orderType = [ 'id', 'subject', 'emailId', 'creationTime', 'dueOn', 'status', 'assignedTo', 'channel' ];

export const ticketListingView = (payload) => {

    const { listingData, isLoading } = payload;

    return (
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
            {

                listingData.map( ( list ) => {

                    return(
                        <div key={ list.id } className="ticket-container-nav">
                            <div className="select-all-checkbox">
                                <input type="checkbox" />
                            </div>
                            <div className="headings-wrapper">
                                {
                                    orderType.map( ( key ) => {

                                        return(
                                            <div>{ list[ key ] }</div>
                                        );

                                    } )
                                }
                            </div>
                        </div>
                    );

                } )

            }

        </div>
    )
}
