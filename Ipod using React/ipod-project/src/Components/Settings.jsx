import React from "react";

export default class Settings extends React.Component {
  render() {
    if (!this.props.selected) return null;

    return (
      <div className="listItem-container">
        <div className="item-content">Settings</div>
        <img
          src="https://cdn-icons-png.flaticon.com/128/3953/3953226.png"
          alt="Settings Icon"
        />
      </div>
    );
  }
}
