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
                // console.log(response)

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

    toggleReplyDisplay = () => {
        if (this.state.isHidden === 'none') {
            this.setState({ isHidden: 'block' })
        } else {
            this.setState({ isHidden: 'none' })
        }
        console.log('hello');
    }

    render() {
        ;
        return (
            <TicketView
                {...this.state}
                toggleReplyDisplay={this.toggleReplyDisplay} />
        )
    }
}

export default TicketDetails;