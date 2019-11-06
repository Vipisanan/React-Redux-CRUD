import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import getDataSummaryInReducer from './HomeReducer'

const reducers = combineReducers({
    routing: routerReducer,
    getDataInStore: getDataSummaryInReducer

});

export default reducers;
