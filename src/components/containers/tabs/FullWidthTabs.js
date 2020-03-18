import React, { Component } from "react";

// Importing components from material UI (Reference: https://material-ui.com/components/tabs/#tabs)
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// Importing DisplayCard component
import DisplayCard from "../../cards/DisplayCard";

// Importing MoviesResultsTabPart
import MoviesResultsTabPart from "../layout/MoviesResultsTabPart";

// Importing TvShowsResultsTabPart
import TvShowsResultsTabPart from "../layout/TvShowsResultsTabPart";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

// Stateful component
export class FullWidthTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    console.log("Tab Value", value);
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    // Destructuring the props
    const { searchName, type, results } = this.props;

    return (
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="MOVIES" {...a11yProps(0)} />
            <Tab label="SEARCH RESULTS" {...a11yProps(1)} />
            <Tab label="TV SHOWS" {...a11yProps(2)} />
          </Tabs>
        </AppBar>

        {/* Movies Tab Panel */}
        <TabPanel value={value} index={0}>
          {/* Movies */}
          <MoviesResultsTabPart />
        </TabPanel>

        {/* Search Tab Panel */}
        <TabPanel value={value} index={1}>
          {/* Search Results */}

          {/* First of all, checking if search results is having a search value (searchName). If yes, then checking if we got some results corresponding to what user has searched for.  */}
          {searchName == ""
            ? "Please enter a search"
            : results.length === 0
            ? "Sorry, there were no results"
            : "Here you go.."}

          {/* Code courtesy: Paul Lam */}
          {results.map(result => {
            const {
              popularity,
              title,
              release_date,
              overview,
              name,
              poster_path
            } = result;
            return (
              <DisplayCard
                popularity={popularity}
                // If search result is a movie, then it will render title. If it is a tv show, then it will render name.
                // Code Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
                imageTitle={title ? title : name}
                info={overview}
                releaseDate={release_date}
                imagePath={poster_path}
              />
            );
          })}
        </TabPanel>

        {/* TV Shows Tab Panel */}
        <TabPanel value={value} index={2}>
          {/* TV Shows */}
          <TvShowsResultsTabPart />
        </TabPanel>
      </div>
    );
  }
}

// Exporting FullWidthTabs
export default FullWidthTabs;
