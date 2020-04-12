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
            ticketData: []
        }
    }

    componentDidMount() {
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
    }

    render() {
        ;
        return (
            <TicketView
                {...this.state} />
        )
    }
}

export default TicketDetails;