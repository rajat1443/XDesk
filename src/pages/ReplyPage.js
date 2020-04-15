import React, { Component } from 'react';
import TicketReplyNav from '../Views/ticketReplyNav';
import TicketReplyBottomContainer from '../Views/ticketReplyBottomContainer';
import { fetch } from '../modules/httpServices';
import { constants } from '../modules/constants';
import { cloneDeep } from 'lodash';


class Reply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            ticket_id: 0
        }
    }



    handleChange = (text) => {
        this.setState({ text: text });
    }

    handleSubmit = (e) => {
        const ticket_id = this.props.match.params.ticket_id;
        const url = '/' + ticket_id + '/replies';
        this.setState({ ticket_id: ticket_id });
        console.log(this.state.ticket_id);


        const { text } = this.state;

        this.setState(() => {
            fetch.post({
                url: constants.SERVICE_URLS.TICKET_REPLY + url,
                requestBody: {
                    text: text
                },
                callbackHandler: (response) => {
                    const { status, message, payload } = response;
                    const _state = cloneDeep(this.state);

                    if (status === constants.SUCCESS) {
                        _state.message = message;
                        console.log(payload);
                    }
                }
            })
        })
    }

    render() {
        return (
            <div className="Ticket-Reply-Container">
                <TicketReplyNav />
                <TicketReplyBottomContainer
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    ticket_id={this.state.ticket_id}
                    props={this.props}
                />
            </div>

        )
    }
}

export default Reply;