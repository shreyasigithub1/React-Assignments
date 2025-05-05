import React from "react";

export default class CoverFlow extends React.Component {
  render() {
    if (!this.props.selected) return null;

    return (
      <>
        <div className="listItem-container">
          <div class="item-content">Cover Flow</div>
        </div>
      </>
    );
  }
}
