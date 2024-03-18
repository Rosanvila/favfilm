import React from "react";
import "./App.css";
import Movie from "./components/Movie";
import movieList from "./data/moviedata";
import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          {movieList.map((m, i) => (
            <Movie
              key={i}
              title={m.title}
              year={m.year}
              posterUrl={m.posterUrl}
              director={m.director}
              synopsis={m.synopsis}
            />
          ))}
        </main>
      </div>
    );
  }
}

export default App;
