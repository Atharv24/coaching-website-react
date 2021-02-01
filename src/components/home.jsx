import React from "react";
import { Card, Paper, Grid, CardActionArea } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CourseCard from "./courseCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 16,
  },
  header: {
    padding: 8,
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontSize: 18,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.header}>Courses</Paper>
      </Grid>
      {content.map((x) => (
        <CourseCard header={x.class} />
      ))}
    </Grid>
  );
}

const content = [
  { class: "For students starting 12th" },
  { class: "For students starting 11th" },
  { class: "For students starting 10th" },
  { class: "For students starting 9th" },
];
