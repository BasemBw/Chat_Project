import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react'
import { User } from './store/user_handler'

const user = new User()

const stores = {
    user
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider {...stores}>
        <App />
    </Provider>,
);

reportWebVitals();
