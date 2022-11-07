import axios from 'axios';
import React from 'react'
import { ThemeConsumer } from 'styled-components';
import Form from './Form'
import TodoList from './TodoList'
const URL = 'http://localhost:9000/api/todos'


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      error: '',
      todoInput: '',
      displayComplete: true
    }
  }

  fetchTodos = () => {
    axios.get(URL)
      .then(res =>
        this.setState({ ...this.state, todos: res.data.data }))
      .catch(err =>
        this.setState({ ...this.state, error: err.response.data.message }));
  }

  postNewTodo = () => {
    axios.post(URL, { name: this.state.todoInput })
      .then(res => {
        this.setState({ ...this.state, todos: this.state.todos.concat(res.data.data) })
        this.resetForm()
      })
      .catch(err => {

      })
  }

  toggleCompleted = id => {
    axios.patch(`${URL}/${id}`)
      .then(res => {
        this.setState({
          ...this.state, todos: this.state.todos.map(td => {
            if (td.id !== id) return td
            return res.data.data
          })
        })

      })
      .catch(err => console.log(err))
  }

  hideCompleted = () => {
    this.setState({ ...this.state, displayComplete: !this.state.displayComplete })
  }

  resetForm = () => this.setState({ ...this.state, todoInput: '' })

  onFormSubmit = evt => {
    evt.preventDefault();
    this.postNewTodo();
  }

  componentDidMount() {
    this.fetchTodos()
  }

  onTodoChange = evt => {
    const { value } = evt.target
    this.setState({ ...this.state, todoInput: value })
  }

  render() {
    console.log('render')
    return (
      <>
        <div id="error">{this.state.error}</div>

      <TodoList 
      todos={this.state.todos}
      displayComplete={this.state.displayComplete}
      toggleCompleted={this.toggleCompleted}/>

       <Form 
       onFormSubmit={this.onFormSubmit}
       onTodoChange={this.onTodoChange}
       todoInput={this.state.todoInput}
       hideCompleted={this.hideCompleted}
       displayComplete={this.displayComplete}/>
      </>
    )
  }
}

