import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import settings from './settings';
import itemListReducer from './itemListReducer'

const rootReducer = combineReducers({itemListReducer, settings, routing: routerReducer});

export default rootReducer;