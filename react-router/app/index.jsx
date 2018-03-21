import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import './styles.css';

import TodoApp from './TodoApp';
import TodoItemList from './TodoItemList';
import TodoSettings from './TodoSettings';


render((
    <Router history={browserHistory}>
        <Route path="/" component={TodoApp}>
            <IndexRoute component={TodoItemList} />
            <Route path="settings" component={TodoSettings} />
        </Route>
    </Router>
), document.querySelector('.react-app'));