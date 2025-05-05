import React from "react";
import "../assets/AllSongs.css"; 

export default class AllSongs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: true,
      currentTime: 0,
      duration: 0,
    };
    this.audioRef = React.createRef();
    this.interval = null;
  }

  componentDidMount() {
    const audio = this.audioRef.current;
    if (audio) {
      audio.play();
      audio.addEventListener("loadedmetadata", this.updateDuration);
      this.interval = setInterval(this.updateTime, 500);
    }
  }

  componentWillUnmount() {
    const audio = this.audioRef.current;
    if (audio) {
      audio.pause();
      audio.removeEventListener("loadedmetadata", this.updateDuration);
    }
    clearInterval(this.interval);
  }

  updateTime = () => {
    const audio = this.audioRef.current;
    if (audio) {
      this.setState({ currentTime: audio.currentTime });
    }
  };

  updateDuration = () => {
    const audio = this.audioRef.current;
    if (audio) {
      this.setState({ duration: audio.duration });
    }
  };

  togglePlayPause = () => {
    const audio = this.audioRef.current;
    if (!audio) return;
    if (this.state.isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    this.setState({ isPlaying: !this.state.isPlaying });
  };

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${mins}:${secs}`;
  }

  render() {
    if (!this.props.selected) return null;

    const { isPlaying, currentTime, duration } = this.state;
    const progress = duration ? (currentTime / duration) * 100 : 0;

    return (
      <>
        <div className="song-screen">
          <h2>Now Playing</h2>
          <div className="song-info">
            <img
              src="../../Multimedia/Shape Of You.jpg"
              alt="Song"
              className="song-image"
            />
            <div className="song-details">
              <h3 className="song-title">Shape of You</h3>
              <p className="artist-name">Ed Sheeran</p>
            </div>
          </div>

          {/* Play/Pause Button */}
          <div className="controls">
            <button onClick={this.togglePlayPause} className="play-pause-btn">
              {isPlaying ? "⏸ Pause" : "▶ Play"}
            </button>
          </div>

          {/* Progress Bar */}
          <div className="play-line">
            <span>{this.formatTime(currentTime)}</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <span>{this.formatTime(duration)}</span>
          </div>

          {/* Hidden Audio Element */}
          <audio ref={this.audioRef} src="../../Multimedia/Shape-Of-You(PagalNew.Com.Se).mp3" />
        </div>
      </>
    );
  }
}
