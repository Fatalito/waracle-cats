import {Button, CircularProgress} from "@material-ui/core";
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {upload} from "../api";
import {makeStyles} from "@material-ui/core/styles";
import {Alert} from "@material-ui/lab";
import {green} from "@material-ui/core/colors";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const Upload = () => {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = React.useState(false);
  const history = useHistory();
  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });
  const click = async (selectedFile) => {
    setSuccess(false);
    setLoading(true);
    setError(null);
    const result = await upload(selectedFile);
    if (result.id) {
      setSuccess(true);
      history.push("./");
      return;
    }
    setError(result.message);
    setLoading(false);
  };

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="upload"
        type="file"
        onChange={(e) => click(e.target.files[0])}
      />
      <div className={classes.wrapper}>
        <label htmlFor="upload">
          <Button
            variant="contained"
            color="primary"
            component="span"
            className={buttonClassname}
            disabled={loading}
          >
            Upload
          </Button>
        </label>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>

      {error && <Alert severity="error">{error}</Alert>}
    </div>
  );
};

export default Upload;
