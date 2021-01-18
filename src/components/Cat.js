import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "100%",
  },
  wrapper: {
    marginLeft: theme.spacing(10),
  },
}));

const Cat = ({
  id,
  url,
  favouriteId,
  score,
  addFavourite,
  unFavourite,
  addVote,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={url} title={id} />
      <CardActions disableSpacing>
        {favouriteId ? (
          <IconButton
            aria-label="unfavorites"
            onClick={() => unFavourite(favouriteId)}
          >
            <FavoriteIcon />
          </IconButton>
        ) : (
          <IconButton
            aria-label="add to favorites"
            onClick={() => addFavourite(id)}
          >
            <FavoriteBorderIcon />
          </IconButton>
        )}
        <IconButton aria-label="vote down" onClick={() => addVote(id, 0)}>
          <ThumbDownIcon />
        </IconButton>
        <IconButton aria-label="vote up" onClick={() => addVote(id, 1)}>
          <ThumbUpIcon />
        </IconButton>
        <div className={classes.wrapper}>
          <Typography>Score: {score}</Typography>
        </div>
      </CardActions>
    </Card>
  );
};

export default Cat;
