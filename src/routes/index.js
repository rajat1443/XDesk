import React from 'react';
import { userHasLogin } from '../hoc/userHasLogin';
import LoginPage from '../pages/LoginPage';
import TicketListingPage from '../pages/TicketListingPage';
// import Tickets from './Components/Tickets'
import TicketDetails from '../Components/TicketDetails';
import Reply from '../pages/ReplyPage';
import { BrowserRouter, Route } from 'react-router-dom';
import Tickets from '../Components/Tickets'

export const routes = () => {
  return (
    <BrowserRouter >
      <Route exact={true} path='/' component={LoginPage} />
      <Route exact={true} path='/ticketlist' component={userHasLogin(TicketListingPage)} />
      <Route exact={true} path='/ticketlist/:ticket_id' component={userHasLogin(TicketDetails)} />
      <Route exact={true} path='/replies/:ticket_id' component={Reply} />
      <Route exact={true} path='/addtickets' component={Tickets} />
      {/* 
           />
           */}
    </BrowserRouter>
  );
}

