import { Component } from "react";

class Movies extends Component {
  constructor() {
    super();

    this.state = {
      moviesArr: [],
    };
  }

  fetchMovies = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          moviesArr: data,
          selectedMovie: "",
        });
      });
  };

  componentDidMount = () => {
    this.fetchMovies();
  };

  handleSelectMovie = (event) => {
    let movieObj = this.state.moviesArr.map((movie) => {
      if (movie.title === event.target.value) {
        return (
          <div>
            <h1>Title: {movie.title}</h1>
            <p>Release Date: {movie.release_date}</p>
            <p>Description: {movie.description}</p>
          </div>
        );
      }
    });
    this.setState({
      selectedMovie: movieObj,
    });
  };

  render() {
    let movieDropdown = this.state.moviesArr.map((movie) => {
      return <option>{movie.title}</option>;
    });

    return (
      <div className="movies">
        <h1>Select a Movie</h1>
        <select
          onChange={this.handleSelectMovie}
          value={this.state.selectedMovie}
        >
          <option></option>
          {movieDropdown}
        </select>
        <p>{this.state.selectedMovie}</p>
      </div>
    );
  }
}

export default Movies;
