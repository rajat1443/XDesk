import React, { Component } from 'react';
import { cloneDeep } from 'lodash';
import TicketView from '../Views/TikcetView';
import { fetch } from '../modules/httpServices'
import { constants } from '../modules/constants';


class TicketDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ticketData: [],
            ticketReplies: [],
            allAdminUsers: [],
            ticketJourney: [],
            resolutionText: null
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

        fetch.get({
            url: constants.SERVICE_URLS.TICKET_VIEW_ADMIN,
            callbackHandler: (response) => {
                const { status, message, payload } = response;

                const _state = cloneDeep(this.state);

                if (status === constants.SUCCESS) {
                    _state.message = "";
                    _state.allAdminUsers = payload.data;

                } else {
                    _state.message = message
                }
                this.setState({ allAdminUsers: _state.allAdminUsers })
            }
        })
        fetch.get({
            url: constants.SERVICE_URLS.TICKET_HISTORY + id + '/ticket-journey',
            callbackHandler: (response) => {
                const { status, payload, message } = response;

                const _state = cloneDeep(this.state);

                if (status === constants.SUCCESS) {
                    _state.message = "";
                    _state.ticketJourney = payload.result.ticketJourneys;


                } else {
                    _state.message = message;
                }
                this.setState({ ticketJourney: _state.ticketJourney })
            }
        })
    }


    changeSelectValue = (selectValue, ticketStatus) => {
        if (ticketStatus === "CLOSED") {
            alert('Cannot change assigned role the ticket is closed!');
        } else {
            console.log(selectValue)
            const id = this.props.match.params.ticket_id;
            fetch.put({
                url: constants.SERVICE_URLS.TICKET_ASSIGN + '/' + id + '?emailId=' + selectValue,
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
                window.location.reload();
            }
        })

    }
    statusHandler = () => {
        const id = this.props.match.params.ticket_id;
        fetch.put({
            url: constants.SERVICE_URLS.TICKET_STATUS + id + '/change-status?status=CLOSED',
            callbackHandler: (response) => {
                window.location.reload();
            }
        })
    }

    resolutionChangeHandler = (resolutionText) => {
        this.setState({ resolutionText: resolutionText })
    }

    resolutionSubmitHandler = (e) => {
        e.preventDefault();
        const id = this.props.match.params.ticket_id;
        if (this.state.resolutionText === null) {
            alert("Resolution can't be empty!")
        } else {
            fetch.post({
                url: constants.SERVICE_URLS.TICKET_RESOLUTION + id + '/resolution',
                requestBody: {
                    text: this.state.resolutionText
                },
                callbackHandler: (response) => {
                    console.log(response)
                }
            })
        }
    }


    render() {
        return (
            <TicketView
                {...this.state}
                toggleReplyDisplay={this.toggleReplyDisplay}
                changeSelectValue={this.changeSelectValue}
                changeStatusValue={this.changeStatusValue}
                resolutionSubmitHandler={this.resolutionSubmitHandler}
                resolutionChangeHandler={this.resolutionChangeHandler}
                statusHandler={this.statusHandler}
            />

        )
    }
}

export default TicketDetails;