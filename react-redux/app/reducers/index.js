import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import todoItems from './todoItems';
import settings from './settings';
import itemListReducer from './itemListReducer'

const rootReducer = combineReducers({itemListReducer, todoItems, settings, routing: routerReducer});

export default rootReducer;