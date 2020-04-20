import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import SignOutButton from "../components/signOutButton";
import UrlPlaceholder from "../components/urlPlaceholder";
import Button from "@material-ui/core/Button";
import analyzeArticle from "../utils/analyzeArticle";
import Loader from "react-loader-spinner";
import PresentData from "../components/presentData";

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
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [data, setData] = React.useState(null);
  console.log(data);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (error) {
      alert("Please enter a valid URL first.");
    } else {
      setIsProcessing(true);
      try {
        const requestAnalyzeArticle = await analyzeArticle(url);
        setData(requestAnalyzeArticle.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsProcessing(false);
      }
    }
  };

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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ margin: 20 }}
          onClick={handleSubmit}
        >
          Analyze now
        </Button>
      </Grid>
      {isProcessing && (
        <Grid container item justify="center" style={{ margin: 20 }}>
          <Loader />
        </Grid>
      )}
      {data && (
        <Grid container item justify="center">
          <PresentData data={data} />
        </Grid>
      )}
    </div>
  );
};

export default Home;
