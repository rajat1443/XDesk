import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import { routes as Routes } from './routes/index';
import * as serviceWorker from './serviceWorker';
ReactDOM.render( <Routes />, document.getElementById('root') );
serviceWorker.unregister();
