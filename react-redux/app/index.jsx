import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router'
import './styles.css';

import TodoApp from './TodoApp';
import TodoItemList from './TodoItemList';
import TodoSettings from './TodoSettings';
import store, {history} from './store';


render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={TodoApp}>
                <IndexRoute component={TodoItemList} />
                <Route path="settings" component={TodoSettings} />
            </Route>
        </Router>
    </Provider>
), document.querySelector('.react-app'));