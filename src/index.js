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

function* postPosts(action) {
    const postPost = yield Axios.post(`/posts`, action.payload)
    console.log('in the put description', postPost)
    yield put({
        type: 'GET_POSTS',

    })
}

function* getPosts() {
    const postsResponse = yield Axios.get('/posts')
    console.log('in the GET getPosts', postsResponse)
    yield put({
        type: 'SET_POSTS',
        payload: postsResponse.data
    })
}


function* watcherSaga() {
    yield takeEvery('POST', postPosts);
    yield takeEvery('GET_POSTS', getPosts)

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