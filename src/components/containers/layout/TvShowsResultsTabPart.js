import React, { Component } from "react";

// Importing TextField and MenuItem from Material UI
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

// Importing getTvShows from api
import { getTvShows } from "../../../services/api";

// Importing DisplayCard component
import DisplayCard from "../../cards/DisplayCard";

// Stateful component
class TvShowsResultsTabPart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // An array of TV show type categories
      tvShowTypeCategories: [
        {
          value: "popular",
          label: "Popular"
        },
        {
          value: "on_the_air",
          label: "On The Air"
        },
        {
          value: "top_rated",
          label: "Top Rated"
        },
        {
          value: "airing_today",
          label: "Airing Today"
        }
      ],
      tvShowTypeCategory: "popular",
      tvShows: []
    };
  }

  // handle function for TextField
  handleChange = e => {
    // Setting the state of the textfield
    this.setState({ tvShowTypeCategory: e.target.value });
    console.log("tvShowCategory", e.target.value);

    const { tvShowTypeCategory } = this.state;
    e.preventDefault();
    this.setState({
      isLoading: true
    });

    // Calling the api
    getTvShows(tvShowTypeCategory).then(tvShows => {
      console.log("calling get tv shows");
      this.setState({
        tvShows,
        isLoading: false
      });
    });
  };

  render() {
    const { tvShowTypeCategories, tvShowTypeCategory, tvShows } = this.state;
    return (
      <div className="outer-container">
        {/* TextField from the material UI (Reference: https://material-ui.com/components/text-fields/#textfield) */}
        <TextField
          style={{ color: "red" }}
          id="outlined-select-type"
          select
          label="Search Type"
          value={tvShowTypeCategory}
          onChange={this.handleChange}
          variant="outlined"
        >
          {tvShowTypeCategories.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        {/* Code courtesy: Paul Lam */}
        {tvShows.map(movie => {
          const {
            popularity,
            name,
            release_date,
            overview,
            poster_path
          } = movie;
          return (
            // DisplayCard component
            <DisplayCard
              popularity={popularity}
              imageTitle={name}
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

// Exporting TvShowsResultsTabPart
export default TvShowsResultsTabPart;
