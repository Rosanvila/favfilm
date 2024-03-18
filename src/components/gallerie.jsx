import React, { Component } from "react";
import "../components/gallerie.css";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
      btnLeft: true,
      btnRight: true,
    };
  }

  render() {
    const { urls, title } = this.props;
    const { imageIndex, btnLeft, btnRight } = this.state;
    return (
      <div className="gallery">
        {btnLeft && <button onClick={this.previousImage}>&lt;</button>}
        <img src={urls[imageIndex]} alt={"Photo de " + title} />
        {btnRight && <button onClick={this.nextImage}>&gt;</button>}
      </div>
    );
  }

  nextImage = () => {
    const nextIndex = this.state.imageIndex + 1;
    this.setState({
      imageIndex: nextIndex < this.props.urls.length ? nextIndex : 0,
      btnRight: nextIndex < this.props.urls.length - 1,
      btnLeft: true,
    });
  };

  previousImage = () => {
    const prevIndex = this.state.imageIndex - 1;
    this.setState({
      imageIndex: prevIndex >= 0 ? prevIndex : this.props.urls.length - 1,
      btnLeft: prevIndex > 0,
      btnRight: true,
    });
  };
}

export default Gallery;
