import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxStore from './reducers'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { localStorageLoad, localStorageDump } from './middleware/index'

const loggerMiddleware = createLogger()

const store = createStore(
    reduxStore,
    applyMiddleware(
        //localStorageLoad,
        localStorageDump, // I really dont know why dump is in first but only way it works
        localStorageLoad,
        thunkMiddleware,
        
        //logger needs to be last (first?)
        loggerMiddleware
    )
)

store.dispatch({ type: 'INIT' });

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
