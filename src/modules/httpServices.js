import axios from 'axios';
import shortid from 'shortid';
// import axiosCancel from 'axios-cancel';
import APP from '../modules/index';

// axiosCancel(axios);

// const requestId = shortid.generate();

// axios.interceptors.request.use(function(config) {
//     const token = window.localStorage.getItem('Token');

//     if (token != null) {
//         config.headers.Authorization = `Bearer ${token}`;  
//     }
    
//     return config;
// }, function(err) {

//     return Promise.reject(err);

// });

// axios.interceptors.response.use(function(config) {
//     if(config.headers['content-type'] === "application/download"){  
//         const url = URL.createObjectURL(new Blob([config.data],{type: 'application/vnd.ms-excel'}));
//         const link = document.createElement('a');
//         link.href = url;
//         let fileName = 'download';
//         if(config.config && config.config.url){
//            let arr = config.config.url.split('/');
//            fileName = arr[arr.length - 1]  + "_report.xlsx";
//         }
//         link.setAttribute('download', fileName);
//         document.body.appendChild(link);
//         link.click();
//    }
   
//     return config;

// }, function(error) {
//     if (401 === error.response.status) {
//         window.localStorage.removeItem('Token');
//     }
    
//     return Promise.reject(error);
// });

export const fetch = {
    get({ url, requestParams = {}, callbackHandler}) {
        const ins = axios.get(`${APP.Constants.THIRD_PARTY_API_HOST}${url}`, {
            params: requestParams,
            // requestId
        });
        outputHandler({ ins, callbackHandler });
    },
    getExcel({ url, requestParams = {}, callbackHandler}) {
        const ins = axios.get(`${APP.Constants.THIRD_PARTY_API_HOST}${url}`, {
            params: requestParams,
            // requestId,
            responseType: 'arraybuffer'
        });
        outputHandler({ ins, callbackHandler });
    },
    
    post({ url, headers, requestBody = {}, callbackHandler }) {
        const ins = axios.post(`${APP.Constants.THIRD_PARTY_API_HOST}${url}`, {...requestBody});
        outputHandler({ ins, callbackHandler });
    },
    delete({ url, requestBody = {}, callbackHandler }) {
        const ins = axios.delete(`${APP.Constants.THIRD_PARTY_API_HOST}${url}`, {...requestBody });
        outputHandler({ ins, callbackHandler });
    },
    put({ url, requestBody = {}, callbackHandler }) {
        const ins = axios.put(`${APP.Constants.THIRD_PARTY_API_HOST}${url}`, {...requestBody, });
        outputHandler({ ins, callbackHandler });
    }
    
};

const outputHandler = ({ ins, callbackHandler }) => {
    ins.then((response) => {

        callbackHandler({
            status: APP.Constants.SUCCESS,
            message: '',
            payload: response.data
        });

    }).catch( () => {
        callbackHandler({
            status: APP.Constants.FAILURE,
            message: 'Something went worng...',
            payload: {}
        });
    });

};