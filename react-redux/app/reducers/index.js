import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import todoItems from './todoItems';
import settings from './settings';

const rootReducer = combineReducers({todoItems, settings, routing: routerReducer});

export default rootReducer;