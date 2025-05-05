import React from 'react';

class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.lastAngle = null;
    this.accumulatedRotation = 0;
    this.lastTriggerTime = null;
  }

  handleRotate = (e) => {
    // Prevent interaction if hovering over the center button
    if (e.target.closest('.center-button')) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

    let angle = Math.atan2(y, x) * (180 / Math.PI);
    if (angle < 0) angle += 360;

    if (this.lastAngle !== null) {
      let diff = angle - this.lastAngle;

      // Normalize the difference
      if (diff > 180) diff -= 360;
      if (diff < -180) diff += 360;

      this.accumulatedRotation += diff;

      const now = Date.now();
      if (!this.lastTriggerTime) this.lastTriggerTime = now;

      const timeSinceLastTrigger = now - this.lastTriggerTime;

      if (this.accumulatedRotation > 45 && timeSinceLastTrigger > 300) {
        this.props.onRotate?.('next');
        this.accumulatedRotation = 0;
        this.lastTriggerTime = now;
      } else if (this.accumulatedRotation < -45 && timeSinceLastTrigger > 300) {
        this.props.onRotate?.('prev');
        this.accumulatedRotation = 0;
        this.lastTriggerTime = now;
      }
    }

    this.lastAngle = angle;
  };

  componentDidMount() {
    const wheel = document.getElementById('wheel');
    if (wheel) {
      wheel.addEventListener('mousemove', this.handleRotate);
    }
  }

  componentWillUnmount() {
    const wheel = document.getElementById('wheel');
    if (wheel) {
      wheel.removeEventListener('mousemove', this.handleRotate);
    }
  }

  render() {
    return (
      <div id="wheel" className="wheel">
        <div className="icon top" onClick={this.props.onMenu}>MENU</div>
        <div className="icon left">⏮</div>
        <div className="icon right">⏭</div>
        <div className="icon bottom">
          <img src="https://cdn-icons-png.flaticon.com/128/27/27223.png" alt="play" />
        </div>
        <div className="center-button" onClick={this.props.onSelect}></div>
      </div>
    );
  }
}

export default Wheel;
