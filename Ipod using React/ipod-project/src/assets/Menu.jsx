import React from "react";
import CoverFlow from "../Components/CoverFlow";
import Music from "../Components/Music";
import Games from "../Components/Games";
import Settings from "../Components/Settings";
import Wheel from "../Components/Wheel";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      selectedIndex: null,
    };

    this.MENU_ITEMS = [
      { label: "CoverFlow", component: CoverFlow },
      { label: "Music", component: Music },
      { label: "Games", component: Games },
      { label: "Settings", component: Settings },
    ];
  }

  handleRotate = (direction) => {
    const maxIndex = this.MENU_ITEMS.length;
    this.setState((prevState) => {
      const newIndex =
        direction === "next"
          ? (prevState.currentIndex + 1) % maxIndex
          : (prevState.currentIndex - 1 + maxIndex) % maxIndex;
      return { currentIndex: newIndex };
    });
  };

  handleSelect = () => {
    this.setState({ selectedIndex: this.state.currentIndex });
  };

  handleBack = () => {
    this.setState({ selectedIndex: null });
  };

  getHandlers = () => {
    const { selectedIndex } = this.state;
    if (selectedIndex !== null) {
      const SelectedComponent = this.MENU_ITEMS[selectedIndex].component;
      if (
        SelectedComponent &&
        typeof this.selectedRef?.getHandlers === "function"
      ) {
        return this.selectedRef.getHandlers();
      }
    }

    return {
      onRotate: this.handleRotate,
      onSelect: this.handleSelect,
      onMenu: this.handleBack,
    };
  };

  render() {
    const { currentIndex, selectedIndex } = this.state;

    return (
      <>
        {selectedIndex === null ? (
          <div className="menu-container">
            <div className="menu-list">
              <h1 className="ipod-title">iPod.js</h1>
              {this.MENU_ITEMS.map((item, index) => (
                <div
                  key={index}
                  className={`menu-listItem ${
                    index === currentIndex ? "hovered" : ""
                  }`}
                >
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="menu-image">
              <img src="https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=1200" />
            </div>
          </div>
        ) : (
          <div className="selected-screen">
            {React.createElement(this.MENU_ITEMS[selectedIndex].component, {
              selected: true,
              ref: (ref) => (this.selectedRef = ref),
              onBack: this.handleBack,
            })}
          </div>
        )}

        <div className="wheel-div">
          <Wheel {...this.getHandlers()} />
        </div>
      </>
    );
  }
}
