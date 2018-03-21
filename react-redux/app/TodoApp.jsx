import React from 'react';
import TodoAppNavigation from './TodoAppNavigation';
import { connect } from 'react-redux';

class TodoApp extends React.Component {

  render() {
    const appStyle = {
        backgroundColor: this.props.appSettings.backgroundColor
    };


    return <div>
              <div className="todo-app" style={appStyle}>
                <TodoAppNavigation />
                {this.props.children}
              </div>
          </div>
  }
}

export default connect(
  (state) => ({
    appSettings: state.settings
  }),
  null
)(TodoApp)
