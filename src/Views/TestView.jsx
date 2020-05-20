import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootstrap from 'react-bootstrap';
import { Link } from 'react-router-dom';


const TableView = (payload) => {
    const { listingData } = payload;
    console.log(listingData)
    const columns = [
        { dataField: "id", text: "Ticket ID" },
        { dataField: "subject", text: "subject" },
        { dataField: "displayName", text: "Contact Name" },
        { dataField: "creationTime", text: "Customer Responded Time" },
        { dataField: "dueOn", text: "Due Date" },
        { dataField: "status", text: "status" },
        { dataField: "assignedTo", text: "assignedTo" },
        { dataField: "channel", text: "channel" },
    ]
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
                            <React.Fragment >

                                <tr key={ticket.id}>

                                    <td><Link to={'/ticketlist/' + ticket.id} >{ticket.id}</Link></td>
                                    <td><Link to={'/ticketlist/' + ticket.id} >{ticket.subject}</Link></td>
                                    <td><Link to={'/ticketlist/' + ticket.id} >{ticket.displayName}</Link></td>
                                    <td><Link to={'/ticketlist/' + ticket.id} >{creationTime.toLocaleString()}</Link></td>
                                    <td><Link to={'/ticketlist/' + ticket.id} >{dueOn.toLocaleString()}</Link></td>
                                    <td><Link to={'/ticketlist/' + ticket.id} >{ticket.status}</Link></td>
                                    <td><Link to={'/ticketlist/' + ticket.id} >{ticket.assignedTo}</Link></td>
                                    <td><Link to={'/ticketlist/' + ticket.id} >{ticket.channel}</Link></td>

                                </tr>

                            </React.Fragment>
                        )
                    })
                }
            </tbody>
        </table >

    )
}

export default TableView;