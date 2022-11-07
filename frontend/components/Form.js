import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <form id="todoForm" onSubmit={this.props.onFormSubmit}>
          <input
            value={this.props.todoInput}
            type="text"
            placeholder="Add task"
            onChange={this.props.onTodoChange}
          >
          </input>
          <input type="submit"></input>
        </form>
        <button onClick={this.props.hideCompleted}>
          {this.props.displayComplete ? 'Hide' : 'Show'} Completed
        </button>
      </div>
    )
  }
}
