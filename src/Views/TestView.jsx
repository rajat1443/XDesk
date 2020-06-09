import React from 'react';
import { Link } from 'react-router-dom';


const TableView = (payload) => {
<<<<<<< HEAD
    const { listingData, onChangeHandler, onSubmitHandler, viewAllTickets } = payload;

=======
    const { listingData } = payload;
    console.log(listingData)
>>>>>>> cdfcfa64fb7c4c28573383df179f982da0cf0abf


    return (
        <React.Fragment>
<<<<<<< HEAD
            <div className="filter-wrapper">
                <form onSubmit={onSubmitHandler}>
                    <span className="search-text-wapper"> SEARCH</span>
                    <input type="date" />
                    <span> to </span>
                    <input type="date" />
                    <input type="text" placeholder="Search for tickets..." onChange={(e) => onChangeHandler({ searchString: e.currentTarget.value })} />
                    <input type="submit" value="Search" />
                    <button id="view-tickets" type="button" onClick={viewAllTickets}> View All Tickets</button>
                </form>
            </div>
=======
            {/* <div className="filter-wrapper">
                <div className="form-wrapper">
                    <form>
                        <span> SEARCH</span>
                        <input type="date" />
                        <span> to </span>
                        <input type="date" />
                        <input type="text" placeholder="Search for tickets..." />
                        <input type="submit" value="Search" />
                    </form>
                </div>
            </div> */}
>>>>>>> cdfcfa64fb7c4c28573383df179f982da0cf0abf
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
                                    </tr>

                                </React.Fragment>
                            )
                        })
                    }
                </tbody>
<<<<<<< HEAD
            </table>

=======
            </table >
>>>>>>> cdfcfa64fb7c4c28573383df179f982da0cf0abf
        </React.Fragment >

    )
}

export default TableView;