import React, { Component } from "react";

// Importing Textfield and Menuitem from material UI
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

// Importing getMovies from api
import { getMovies } from "../../../services/api";

// Importing DisplayCard component
import DisplayCard from "../../cards/DisplayCard";

// Class component
class MoviesResultsTabPart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // An array of movie type categories
      movieTypeCategories: [
        {
          value: "popular",
          label: "Popular"
        },
        {
          value: "upcoming",
          label: "Upcoming"
        },
        {
          value: "top_rated",
          label: "Top Rated"
        },
        {
          value: "now_playing",
          label: "Now Playing"
        }
      ],
      movieTypeCategory: "popular",
      movies: []
    };
  }

  // Calling the api
  fetchMovies = e => {
    const { movieTypeCategory } = this.state;
    this.setState({
      isLoading: true
    });
    getMovies(movieTypeCategory).then(movies => {
      console.log("calling get movies");
      this.setState({
        movies,
        isLoading: false
      });
    });
  };

  handleChange = e => {
    console.log("movieCategory", e.target.value);
    // Setting the state
    this.setState({ movieTypeCategory: e.target.value });

    // Calling the fetch method
    this.fetchMovies(e.target.value);
  };

  render() {
    const { movieTypeCategories, movieTypeCategory, movies } = this.state;

    return (
      <div className="outer-container">
        {/* Textfield from material UI with select (Reference: https://material-ui.com/components/text-fields/#textfield) */}
        <TextField
          style={{ color: "red" }}
          id="outlined-select-type"
          select
          label="Search Type"
          value={movieTypeCategory}
          onChange={this.handleChange}
          variant="outlined"
        >
          {movieTypeCategories.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        {/* Mapping through the movies */}
        {/* Code courtesy: Paul Lam */}
        {movies.map(movie => {
          const {
            popularity,
            title,
            release_date,
            overview,
            poster_path
          } = movie;
          return (
            // Rendering the DisplayCard component
            <DisplayCard
              popularity={popularity}
              imageTitle={title}
              info={overview}
              releaseDate={release_date}
              imagePath={poster_path}
            />
          );
        })}
      </div>
    );
  }
}

// Exporting MoviesResultsTabPart
export default MoviesResultsTabPart;
