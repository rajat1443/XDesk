const API_HOST_PATH = 'https://xdesk.herokuapp.com';

export const constants = {
    SUCCESS: 'success',
    FAILURE: 'failure',
    SERVICE_URLS: {
        LOGIN: `${API_HOST_PATH}/ticket-tool/v1/users/login`,
        TICKET_LISTING: `${API_HOST_PATH}/ticket-tool/v1/tickets`,
        TICKET_DETAILING: `${API_HOST_PATH}/ticket-tool/v1/tickets`,
        TICKET_REPLY: `${API_HOST_PATH}/ticket-tool/v1/tickets`,
        TICKET_ASSIGN: `${API_HOST_PATH}/ticket-tool/v1/tickets/assign`
    },
    NO_DATA_FOUND: 'No results found...'
};