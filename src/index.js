import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { takeEvery, put } from 'redux-saga/effects';
import Axios from 'axios';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();



const postReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return action.payload;
        default:
            return state;
    }
}

function* postPosts() {
    console.log('in the POST')

}




function* watcherSaga() {
    yield takeEvery('POST', postPosts);

}


const storeInstance = createStore(
    combineReducers({
        postReducer
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));