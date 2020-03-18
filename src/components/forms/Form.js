import React from "react";

// Importing components from material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";

// Importing styles from material UI
import { makeStyles } from "@material-ui/core/styles";

// Creating an array of movies
const movies = [
  {
    value: "multi",
    label: "Multi"
  },
  {
    value: "movie",
    label: "Movie"
  },
  {
    value: "tv",
    label: "Tv"
  }
];

const getStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  root: {
    margin: theme.spacing(1),
    width: 200
  }
}));

// Code courtesy: Paul Lam
// Stateless component
const Form = props => {
  const classes = getStyles();

  const [type, setType] = React.useState("multi");
  return (
    <form className={classes.form} onSubmit={props.onSubmit}>
      {/* Creating a textfield to enter the name of the movie to be searched */}
      <TextField
        className={classes.textField}
        label="Search"
        margin="normal"
        name="searchName"
        onChange={e => props.onInputChange(e.target.value)}
        variant="outlined"
      />

      {/* Creating a textfield that uses select component internally. This is to select search type. */}
      <TextField
        className={classes.root}
        id="outlined-select-type"
        select
        label="Search Type"
        value={type}
        onChange={e => {
          props.onTypeChange(e.target.value);
          setType(e.target.value);
        }}
        variant="outlined"
      >
        {movies.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      {/* Button for search */}
      <Button variant="contained" className={classes.button} type="submit">
        Search
      </Button>
    </form>
  );
};

// Exporting Form
export default Form;
