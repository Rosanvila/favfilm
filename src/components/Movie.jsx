/* 
Titre
Année de sortie
Synopsis
Réalisateur
Affiche de film
*/
import React from "react";
import "./movie.css";
import Gallery from "../components/gallerie";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShortnopsis: true,
      bestMovie: false,
    };
  }
  render() {
    const { title, year, synopsis, director, posterUrl } = this.props;
    const { isShortnopsis } = this.state;
    const { bestMovie } = this.state;
    return (
      <div
        className={"movie-container" + (bestMovie ? " best-movie" : "")}
        id="card"
      >
        <h2>{title}</h2>
        <button className="fav-btn" onClick={this.favMovie}>
          &#10084;
        </button>
        <Gallery urls={posterUrl} title={title} />
        <div className="movie-description">
          <p className="synopsis">
            {isShortnopsis ? synopsis.slice(0, 20) : synopsis}
          </p>
          {isShortnopsis && (
            <button onClick={this.moreInfo}>Plus d'info</button>
          )}
        </div>
        <p>{year}</p>
        <p className="realisator">{director}</p>
      </div>
    );
  }

  moreInfo = () => {
    this.setState({
      isShortnopsis: !this.state.isShortnopsis,
    });
  };

  favMovie = () => {
    this.setState({
      bestMovie: !this.state.bestMovie,
    });
  };

  componentDidMount() {
    console.log(`Montage terminé pour ${this.props.title}`);
  }
}

export default Movie;
