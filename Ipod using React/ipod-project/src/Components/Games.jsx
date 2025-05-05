import React from "react";

export default class Games extends React.Component {
  render() {
    if (!this.props.selected) return null;

    return (
      <>
        <div className="listItem-container">
         <div class="item-content">Games</div>
          <img src="https://cdn-icons-png.flaticon.com/128/10490/10490256.png" />
        </div>
      </>
    );
  }
}
