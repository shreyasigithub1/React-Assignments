import React from "react";

export default class Settings extends React.Component {
  render() {
    if (!this.props.selected) return null;

    return (
      <div className="listItem-container">
        <div className="item-content">Artists</div>
        <img
          src="https://cdn-icons-png.flaticon.com/128/2302/2302274.png"
          alt="Artist Icon"
        />
      </div>
    );
  }
}
