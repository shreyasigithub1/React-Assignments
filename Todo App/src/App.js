import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" },
      ],
    };
  }
  handleAdd = (newTodoText) => {
    // complete the function to add a new Todo to the list
    this.setState((prevState) => ({
      todos: [...prevState.todos, { text: newTodoText }],
    }));
  };

  handleRemove = (index) => {
    // complete the function to remove the Todo from the list
    this.setState((prevState) => ({
      todos: prevState.todos.filter((_, i) => i !== index),
    }));
  };
  render() {
    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass the todos list and function as props to utilize those in the component for adding and removing */}
        <Form
          todoList={this.state.todos}
          handleAdd={this.handleAdd}
          handleRemove={this.handleRemove}
        />

        <List
          todo={this.state.todos}
          handleAdd={this.handleAdd}
          handleRemove={this.handleRemove}
        />
      </div>
    );
  }
}
