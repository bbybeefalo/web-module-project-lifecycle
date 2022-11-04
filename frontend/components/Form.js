import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form>
        <h3>Hello from the form</h3>
        <input placeholder='Add task' type="text"></input>
        <button>Add To-do</button>
      </form>
    )
  }
}
