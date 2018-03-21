import React from 'react';
import TodoAppNavigation from './TodoAppNavigation';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: '#ffffff'
    };

    this.onChangeColor = this.onChangeColor.bind(this);
  }

  onChangeColor(newColor) {
    this.setState({
      backgroundColor: newColor
    });
  }

  render() {
    const {children} = this.props;

    const childrenWithProps =
        React.Children.map(children, (child) => React.cloneElement(child, {
            appColor: this.state.backgroundColor,
            onChangeColor: this.onChangeColor
        }));

    const appStyle = {
        backgroundColor: this.state.backgroundColor
    };


    return <div>
              <div className="todo-app" style={appStyle}>
                <TodoAppNavigation />
                {childrenWithProps}
              </div>
          </div>
  }
}
