import React from "react";

export default class Settings extends React.Component {
  render() {
    if (!this.props.selected) return null;

    return (
      <div className="listItem-container">
        <div className="item-content">Albums</div>
        <img
          src="https://cdn-icons-png.flaticon.com/128/10107/10107467.png"
          alt="Album Icon"
        />
      </div>
    );
  }
}
