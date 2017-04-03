import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Mongo } from 'meteor/mongo';
import Task from './Task.jsx';
import Comment from './Comment.jsx';
import { Tasks } from '../api/tasks.js';
import { createContainer } from 'meteor/react-meteor-data';

function Item(props) {
  return <li>{props.message}</li>;
}

// App component - represents the whole app
class App extends Component {
  constructor(props) {
  super(props);

  this.state = {
    hideCompleted: false,
  };
}
  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Tasks.insert({
      text,
      createdAt: new Date(), // current time
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  toggleHideCompleted() {
  this.setState({
    hideCompleted: !this.state.hideCompleted,
  });
}

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
            <label className="hide-completed">
              <input
                type="checkbox"
                readOnly
                checked={this.state.hideCompleted}
                onClick={this.toggleHideCompleted.bind(this)}
               />
               Hide Completed Tasks
            </label>
            <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
           <input
             type="text"
             ref="textInput"
             placeholder="Type to add new tasks"
           />
         </form>
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

App.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default createContainer(() => {
return {
  tasks: Tasks.find({}).fetch(),
};
}, App);
