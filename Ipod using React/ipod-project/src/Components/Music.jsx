import React from "react";
import AllSongs from "./AllSongs";
import Album from "./Album";
import Artist from "./Artist";

export default class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      selectedIndex: null,
    };

    this.MUSIC_ITEMS = [
      { label: "All Songs", component: AllSongs },
      { label: "Albums", component: Album },
      { label: "Artists", component: Artist },
    ];
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.selected && this.props.selected) {
      this.setState({ currentIndex: 0, selectedIndex: null });
    }
  }

  handleRotate = (direction) => {
    const maxIndex = this.MUSIC_ITEMS.length;
    this.setState((prevState) => {
      let newIndex =
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
    if (this.state.selectedIndex !== null) {
      this.setState({ selectedIndex: null });
    } else {
      this.props.onBack?.();
    }
  };

  getHandlers = () => {
    return {
      onRotate: this.handleRotate,
      onSelect: this.handleSelect,
      onMenu: this.handleBack,
    };
  };

  render() {
    const { selected } = this.props;
    const { currentIndex, selectedIndex } = this.state;

    if (!selected) return null;

    if (selectedIndex === null) {
      return (
        <>
        <div className="menu-container full-screen">
          <div className="menu-list">
            <h2>Music</h2>
            {this.MUSIC_ITEMS.map((item, index) => (
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
              <img src="https://png.pngtree.com/background/20230505/original/pngtree-pink-liquid-marble-background-picture-image_2500578.jpg" />
            </div>
          </div>
          
          </>
      );
    }

    const SelectedComponent = this.MUSIC_ITEMS[selectedIndex].component;
    return (
      <div className="selected-screen full-screen">
        <SelectedComponent selected={true} />
      </div>
    );
  }
}
