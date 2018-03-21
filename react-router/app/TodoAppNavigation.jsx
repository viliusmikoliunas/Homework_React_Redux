import React from 'react';
import { Link } from 'react-router';

export default class TodoAppNavigation extends React.Component {
    render() {
        return (
          <div className="navbar navbar-default nav-center">
              <div className="navbar-header">
                  <Link onlyActiveOnIndex activeStyle={{color:'#53acff'}} to="/todo-list">Todos</Link>
              </div>
              <div className="navbar-header">
                  <Link activeStyle={{color:'#53acff'}} to='/todo-list/settings'>Settings</Link>
              </div>
          </div>
        );
    }
}