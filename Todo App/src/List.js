import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {
    return (
      <div className="list">
        {/* Render the todo here from the props*/}

        {this.props.todo.map((td, index) => (
          <Todo
            key={index}
            todo={td}
            handleAdd={this.props.handleAdd}
            handleRemove={this.props.handleRemove}
            index={index}
          />
        ))}
      </div>
    );
  }
}
