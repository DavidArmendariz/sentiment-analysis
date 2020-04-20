import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import SignOutButton from "../components/signOutButton";
import UrlPlaceholder from "../components/urlPlaceholder";
import SubmitBotton from "../components/submitBotton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [url, setUrl] = React.useState(
    "https://techcrunch.com/2019/12/22/who-will-the-winners-be-in-the-future-of-fintech/"
  );
  const [error, setError] = React.useState(false);
  return (
    <div className={classes.root}>
      <Grid container item justify="flex-end">
        <SignOutButton />
      </Grid>
      <Grid container item justify="center">
        <UrlPlaceholder
          url={url}
          setUrl={setUrl}
          error={error}
          setError={setError}
        />
      </Grid>
      <Grid container item justify="center">
        <SubmitBotton error={error} />
      </Grid>
    </div>
  );
};

export default Home;
