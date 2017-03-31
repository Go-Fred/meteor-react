import React, { Component } from 'react';

import Task from './Task.jsx';
import Comment from './Comment.jsx';

function Item(props) {
  return <li>{props.message}</li>;
}

// App component - represents the whole app
export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1', state:'doing' },
      { _id: 2, text: 'This is task 2', state:'done' },
      { _id: 3, text: 'This is task 3', state:'doing' },
    ];
  }

  // renderComment(){
  //   return (<Comment name="Mimo" />);
  // }

  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>

        <div>
          <Item message="dude" />
         <Comment name="Mimo" />
        </div>
      </div>
    );
  }
}
