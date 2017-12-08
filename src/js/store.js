import {createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {iRateReducer} from './reducers';
import thunk from 'redux-thunk';

const store = createStore(iRateReducer, 
    composeWithDevTools(applyMiddleware(thunk)));
    
export default store;