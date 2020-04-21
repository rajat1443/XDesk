import React, { Component } from 'react';
import { cloneDeep } from 'lodash';
import TicketView from '../Views/TikcetView';
import { fetch } from '../modules/httpServices'
import { constants } from '../modules/constants';
import axios from 'axios';

class TicketDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ticketData: [],
            ticketReplies: [],
            isHidden: 'none'
        }
    }

    componentDidMount() {
        const div = document.querySelector('chat-image');
        let id = this.props.match.params.ticket_id;
        this.getTicketInfo(id)

    }

    getTicketInfo = (id) => {
        fetch.get({
            url: constants.SERVICE_URLS.TICKET_DETAILING + '/' + id,
            callbackHandler: (response) => {
                const { status, message, payload } = response;
                const _state = cloneDeep(this.state);


                if (status === constants.SUCCESS) {
                    _state.message = '';
                    _state.ticketData = payload.result.ticketDetails;
                } else {
                    _state.message = message;
                }
                this.setState(_state);
            }
        })

        fetch.get({
            url: constants.SERVICE_URLS.TICKET_REPLY + '/' + id + '/replies',
            callbackHandler: (response) => {

                const { status, message, payload } = response;

                const _state = cloneDeep(this.state);

                if (status === constants.SUCCESS) {
                    _state.message = '';
                    _state.ticketReplies = payload.result.conversations;

                } else {
                    _state.message = message;
                }
                this.setState({ ticketReplies: _state.ticketReplies });

            }
        })
    }


    changeSelectValue = (selectValue, ticketStatus) => {
        if (ticketStatus === "CLOSED") {
            alert('Cannot change assigned role the ticket is closed!');
        } else {
            const emailId = ((selectValue) => {
                switch (selectValue) {
                    case 'admin default person':
                        return 'admin@xebia.com';
                    case 'hr default person':
                        return 'hr@xebia.com';
                    case 'finance default person':
                        return 'finance@xebia.com';
                    default:
                        return 'admin@xebis.com';
                }
            })(selectValue)
            // console.log(selectValue)
            console.log(emailId)
            const id = this.props.match.params.ticket_id;
            fetch.put({
                url: constants.SERVICE_URLS.TICKET_ASSIGN + '/' + id + '?emailId=' + emailId,
                callbackHandler: (response) => {
                    console.log(response);
                    window.location.reload();
                }
            })

        }

    }

    changeStatusValue = (statusValue) => {
        const id = this.props.match.params.ticket_id;
        window.location.reload()
        fetch.put({
            url: constants.SERVICE_URLS.TICKET_STATUS + id + '/change-status?status=' + statusValue,
            callbackHandler: (response) => {
                console.log(response);
                window.location.reload();
            }
        })

    }


    render() {
        return (
            <TicketView
                {...this.state}
                toggleReplyDisplay={this.toggleReplyDisplay}
                changeSelectValue={this.changeSelectValue}
                changeStatusValue={this.changeStatusValue}
            />

        )
    }
}

export default TicketDetails;