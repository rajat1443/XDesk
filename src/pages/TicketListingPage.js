import React from 'react';
import { cloneDeep } from 'lodash';
import { constants } from '../modules/constants';
import { fetch } from '../modules/httpServices';
import { ticketListingView as TicketListingView } from '../Views/ticketListingView';

export default class TicketListingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            listingData: []
        }
    }

    componentDidMount() {
        this.getTicketData();
    }

    getTicketData = () => {
        fetch.get({
            url: constants.SERVICE_URLS.TICKET_LISTING,
            requestParams: {
                page: 0,
                limit: 10
            },
            callbackHandler: (response) => {
                console.log(response)
                const { status, message, payload } = response;
                const _state = cloneDeep(this.state);
                _state.isLoading = false;

                if (status === constants.SUCCESS) {
                    _state.message = '';
                    _state.listingData = payload.result.tickets;

                } else {
                    _state.message = message;
                }

                this.setState(_state);

            }
        });
    }

    render() {
        return (
            <TicketListingView
                {...this.state}
            />
        );

    }

}