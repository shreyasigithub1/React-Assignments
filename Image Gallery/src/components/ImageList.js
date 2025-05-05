import React from "react";
import Image from "./Image";

export default class ImageList extends React.Component {
  // Create Lifecycle method to prevent re render of the list if some spaces are present.
  // Use the shouldComponentUpdate lifecycle method here
  // Step1: Ensure valid images are at least 5 characters long and have no leading/trailing spaces
  // Step2: Only re-render if all images are valid
  
  shouldComponentUpdate(nextProps, nextState) {
    if (!nextState || !nextState.images) return true; 
  
    const hasInvalidImage = nextState.images.some(
      (img) => img.includes(" ") || img.length < 5
    );
  
    return !hasInvalidImage;
  }
  
  
  render() {
    return (
      <div className="image-list">
        {this.props.images.map((image, index) => {
          return <Image key={index} image={image} />;
        })}
      </div>
    );
  }
}
