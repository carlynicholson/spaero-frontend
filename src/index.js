import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import './style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import history from './history';

ReactDOM.render(
    <Router history={history}>
        <App/>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
