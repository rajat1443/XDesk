import React, {Component} from 'react';
// import Navbar from './Views/Navbar'
import Login from './Components/Login';
import TicketList from './Components/TicketList';
import Tickets from './Components/Tickets'
import TicketDetails from './Components/TicketDetails';
import Reply from './Components/Reply';
import {BrowserRouter, Route} from 'react-router-dom';
import ReplyNav from './Views/TicketReplyNav';



class App extends Component{
  render(){
    return(
         <BrowserRouter >
          <Route exact path='/' component={Login} />
          <Route path='/TicketList' component={TicketList} />
          <Route path='/Tickets'   component={Tickets} />
          <Route path='/TicketDetails' component={TicketDetails} />
          <Route path='/TicketReply' component={Reply} />
          </BrowserRouter>
      
    )
  }


}




export default App;
