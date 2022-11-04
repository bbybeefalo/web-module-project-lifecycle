import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    console.log('todolist',this.props.todos)
  }

  
 
  
  render() {
    return (
    <div>
      <Todo />
    </div>
    )
  }
}
