import React from "react";
import {useLocation} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar() {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {location.pathname === "/" ? "My cats" : "Upload"}
          </Typography>
          <Button
            color="inherit"
            href={location.pathname === "/" ? "/upload" : "/"}
          >
            {location.pathname === "/" ? "Upload" : "Cats"}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
