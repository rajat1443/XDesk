const API_HOST_PATH = 'https://xdesk.herokuapp.com';

export const constants = {
    SUCCESS: 'success',
    FAILURE: 'failure',
    SERVICE_URLS: {
        LOGIN: `${API_HOST_PATH}/ticket-tool/v1/users/login`,
        TICKET_LISTING: `${API_HOST_PATH}/ticket-tool/v1/tickets`
    },
    NO_DATA_FOUND: 'No results found...'
};