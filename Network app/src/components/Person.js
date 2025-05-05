import { Component } from "react";

class Person extends Component {
  // Define appropriate lifecycle method to show alert here
  

  componentWillUnmount() {
    alert(
      `A person with ${this.props.person.email} was removed from your network!`
    );
  }

  render() {
    const { img, email } = this.props.person;
    return (
      <div className="person">
        <b onClick={() => this.props.removePerson(this.props.person.id)}>X</b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }
}

export default Person;
