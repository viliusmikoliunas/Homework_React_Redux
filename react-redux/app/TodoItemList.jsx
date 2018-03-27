import React from 'react';
import { render } from 'react-dom';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

class TodoItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      todoItemList: this.props.itemListReducer.itemListTD
    }
  }

  addTodoItem (e){
    e.preventDefault();
    //id cannot start with a number, su add a letter at the begining 
    const newId = 'tdi-' + Math.random().toString(36).substring(2, 15);
    const title = this.state.inputValue;
    this.setState({
      todoItemList: [
        ...this.state.todoItemList,
        {
          id: newId,
          title: title
        }
      ],
      inputValue: ''
    });
    this.props.dispatchAddNewItem(title);
  }

  deleteItem(itemId){
    let newList = this.state.todoItemList.filter(item => item.id !== itemId);
    this.setState({todoItemList: newList});
  }

  inputChanged(e){
    this.setState({
      inputValue: e.target.value
    });
  }

  render() {
    const {todoItemList} = this.state;

    const items = todoItemList.map(item => {
      return <TodoItem 
                key={item.id}
                id={item.id}
                title={item.title}
                deleteItem={this.deleteItem.bind(this)}
              />
    });

    return <div>
            <h1>{this.props.header}</h1>
            <form onSubmit={this.addTodoItem.bind(this)}>
              <input type="text" onChange={this.inputChanged.bind(this)} value={this.state.inputValue}/>
            </form>

            <div>
              <ul>
                {items}
              </ul>
            </div>
        </div>
  }
}
export default connect(
  (state) => ({
    itemListReducer: state.itemListReducer
  }),
  (dispatch) => bindActionCreators({
    dispatchAddNewItem: actions.addNewToDoItem
  }
  ,dispatch)
)(TodoItemList)