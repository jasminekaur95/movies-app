import React, { Component } from "react";

// Importing Form component
import Form from "../forms/Form";

// Importing FullWidthTabs component
import FullWidthTabs from "./tabs/FullWidthTabs";

// Importing the getSearchResults
import { getSearchResults } from "../../services/api";

// Class Component
class MoviesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchName: "",
      type: "movie",
      results: [],
      isLoading: false
    };
  }

  // Handling the value of search text field and set the state
  handleInputChange = searchName => {
    console.log("Search Name: ", searchName);
    this.setState({ searchName: searchName });
  };

  // Handling the type of search text field and set the state
  handleTypeChange = type => {
    console.log("Type: ", type);
    this.setState({ type: type });
  };

  // Function to call the api
  fetchResults = e => {
    const { searchName, type } = this.state;
    e.preventDefault();
    this.setState({
      isLoading: true
    });

    getSearchResults(searchName, type).then(results => {
      console.log("calling get results");
      this.setState({
        results,
        isLoading: false
      });
    });
  };

  // Render method of class component
  render() {
    const { searchName, type, results } = this.state;
    return (
      <div>
        {/* Rendering the Form */}
        <Form
          onInputChange={this.handleInputChange}
          onTypeChange={this.handleTypeChange}
          onSubmit={this.fetchResults}
        />

        {/* Rendering FullWidthTabs component */}
        {/* Passing props like searchName, type and results */}
        <FullWidthTabs searchName={searchName} type={type} results={results} />
      </div>
    );
  }
}

// Exporting MoviesContainer
export default MoviesContainer;
