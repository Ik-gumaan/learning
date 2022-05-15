import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';//to connect redux store to application we have to bind app in between provider
import store from './store';


ReactDOM.render(
    <Provider store={store}>{/* pass store as a prop to connect*/ }
    <App />
    </Provider>
,  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
