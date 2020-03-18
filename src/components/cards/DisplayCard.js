import React from "react";

// Importing styles from Material UI
import { makeStyles } from "@material-ui/core/styles";

// Importing Card from Material UI (Reference: https://material-ui.com/components/cards/#card)
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

// Importing Typogarphy from Material UI
import Typography from "@material-ui/core/Typography";

// Importing IMAGE_URL from api_config
import { IMAGE_URL } from "../../config/api_config";

// Styles
const useStyles = makeStyles({
  root: {
    maxWidth: 850,
    height: 300,
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "1rem"
  },
  info: {
    maxWidth: 400,
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  media: {
    width: 300
  }
});

// Stateless Component
const DisplayCard = props => {
  const classes = useStyles();

  // Passing the props
  const { imageTitle, releaseDate, popularity, info, imagePath } = props;

  return (
    // Card from Material UI (Reference: https://material-ui.com/components/cards/#card)
    <Card className={classes.root}>
      {/* IMAGE of movie/TV show */}
      <CardMedia
        className={classes.media}
        // Example of image url: http://image.tmdb.org/t/p/w400/1gafYQCpDxtfIj7HYBNs4Z3m4oW.jpg
        // It is a combination of IMAGE_URL and poster_path
        // Link reference: https://developers.themoviedb.org/3/getting-started/images
        image={`${IMAGE_URL}${imagePath}`}
        title={imageTitle}
        alt={imageTitle}
      />

      {/* Container for textual information */}
      <CardContent className="info">
        {/* Title of movie/TV show  */}
        <Typography gutterBottom variant="h5" component="h5">
          {imageTitle}
        </Typography>

        {/* Release date and Popularity of movie/TV show */}
        <Typography gutterBottom variant="body2" component="h6">
          Release Date: {releaseDate} | Popularity: {popularity}
        </Typography>

        {/* Description of the movie/TV show */}
        <Typography variant="body2" color="textSecondary" component="p">
          {info}
        </Typography>
      </CardContent>
    </Card>
  );
};

// Exporting DisplayCard
export default DisplayCard;
