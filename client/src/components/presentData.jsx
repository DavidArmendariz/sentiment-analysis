import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SimpleTable from "./table";

const PresentData = ({ data }) => {
  return (
    <div style={{ margin: 50 }}>
      <Grid container item justify="center">
        <Typography variant="h3">Summary of your article</Typography>
      </Grid>
      <Grid container justify="center" spacing={1}>
        {data.summary.sentences.map((sentence, index) => (
          <Grid key={index} container item justify="center">
            {sentence}
          </Grid>
        ))}
      </Grid>
      <Grid container item justify="center">
        <Typography variant="h3">Sentiment analysis</Typography>
      </Grid>
      <Grid container item justify="center">
        <span>
          <b>Polarity: </b> {data.sentiment.polarity}
        </span>
      </Grid>
      <Grid container item justify="center">
        <span>
          <b>Subjectivity: </b> {data.sentiment.subjectivity}
        </span>
      </Grid>
      <Grid container item justify="center">
        <span>
          <b>Polarity confidence: </b>{" "}
          {data.sentiment.polarity_confidence.toFixed(2)}
        </span>
      </Grid>
      <Grid container item justify="center">
        <span>
          <b>Subjectivity confidence: </b>{" "}
          {data.sentiment.subjectivity_confidence.toFixed(2)}
        </span>
      </Grid>
      <Grid container item justify="center">
        <Typography variant="h3">Classification</Typography>
      </Grid>
      <Grid container justify="center" spacing={1}>
        {data.classification.map((classification, index) => (
          <Grid key={index} container item justify="center">
            <span>{classification.label}</span>
          </Grid>
        ))}
      </Grid>
      <Grid container item justify="center">
        <Typography variant="h3">Concepts detected</Typography>
      </Grid>
      <Grid container justify="center">
        {data.concepts.join(", ")}
      </Grid>
      <Grid container item justify="center">
        <Typography variant="h3">Entities</Typography>
      </Grid>
      <Grid container item justify="center">
        <SimpleTable rows={data.entities.entities} />
      </Grid>
    </div>
  );
};

export default PresentData;
