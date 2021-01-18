import React from "react";
import {CircularProgress, Grid, makeStyles} from "@material-ui/core";

import CatContainer from "./CatContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
  },
}));

const Listing = ({cats}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {cats.length === 0 ? (
        <div className={classes.wrapper}>
          <CircularProgress size={"50vh"} />
        </div>
      ) : (
        <Grid container spacing={1}>
          {cats.map((c) => (
            <Grid key={c.id} item sm={6} md={4} lg={3}>
              <CatContainer {...c} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Listing;
