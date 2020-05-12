import React from 'react';
const TableView = (payload) => {
    const { listingData } = payload;
    const time = new Date()
    return (
        <table className="ticketListingTable">
            <tbody>
                <tr id="header-row">
                    <th>id</th>
                    <th>subject</th>
                    <th>displayName</th>
                    <th>Customer Responded Time</th>
                    <th>Due Date</th>
                    <th>status</th>
                    <th>assignedTo</th>
                    <th>channel</th>
                </tr>
                {
                    listingData.map((ticket) => {
                        const creationTime = new Date(ticket.creationTime);
                        const dueOn = new Date(ticket.dueOn);
                        return (
                            <tr key={ticket.id}>
                                <td>{ticket.id}</td>
                                <td>{ticket.subject}</td>
                                <td>{ticket.displayName}</td>
                                <td>{creationTime.toLocaleString()}</td>
                                <td>{time.getDate()}</td>
                                <td>{ticket.status}</td>
                                <td>{ticket.assignedTo}</td>
                                <td>{ticket.channel}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default TableView;