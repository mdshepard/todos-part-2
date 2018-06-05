import React, { Component } from 'react';
import './App.css';
import todoList from './todos.json';

class ListItem extends Component {
  render() {
    return (
    <li className= {this.props.isCompleted ? "completed" : null}>
      <div className="view">
        <input className="toggle"  type="checkbox" autofocus />
        <label>{this.props.value}</label>
        <button className="destroy"/>
      </div>
    </li>
    )
  }
}

class TodoList extends Component {
    state = {
      todos: todoList,
    }
 render() {
	console.log(this.state.todos)
   return (
    <section className="main">
    <ul className="todo-list">

      {this.state.todos.map( todo => <ListItem value={todo.title} isCompleted={todo.completed} /> )}
    </ul>
  </section>
   )
 }
}

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" autofocus />
        </header>
        <TodoList />
        <footer className="footer">
          <span className="todo-count"><strong>0</strong> item(s) left</span>
          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
    );
  }
}

export default App;
