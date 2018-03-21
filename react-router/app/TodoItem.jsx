import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <li>{this.props.title} - <span onClick={() => this.props.deleteItem(this.props.id)}>Delete</span></li>
    }
}

export default TodoItem;