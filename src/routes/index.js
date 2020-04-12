import React from 'react';
import { userHasLogin } from '../hoc/userHasLogin';
import LoginPage from '../pages/LoginPage';
import TicketListingPage from '../pages/TicketListingPage';
// import Tickets from './Components/Tickets'
import TicketDetails from '../Components/TicketDetails';
// import Reply from './Components/Reply';
import { BrowserRouter, Route } from 'react-router-dom';

export const routes = () => {
  return (
    <BrowserRouter >
      <Route exact={true} path='/' component={LoginPage} />
      <Route exact={true} path='/ticketlist' component={userHasLogin(TicketListingPage)} />
      <Route exact={true} path='/ticketDetails/:ticket_id' component={TicketDetails} />
      {/* <Route exact={ true } path='/tickets'   component={Tickets} />
           />
          <Route exact={ true } path='/ticketReply' component={Reply} /> */}
    </BrowserRouter>
  );
}

