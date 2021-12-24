import { requestReducer } from './../../h13/bll/requestReducer';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { themeReducer } from '../../h12/bll/themeReducer';
import { loadingReducer } from './loadingReducer';

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
    request: requestReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
