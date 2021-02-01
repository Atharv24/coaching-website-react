import React from "react";
import {
  Card,
  Paper,
  Grid,
  CardActionArea,
  Typography,
  CardHeader,
  CardMedia,
  CardContent,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CourseCard({ header }) {
  const classes = useStyles();
  return (
    <Grid item xs={3}>
      <Card variant="outlined" className={classes.card}>
        <CardActionArea>
          <CardMedia
            style={{ height: 0, paddingTop: "56.25%" }}
            image="books.jpg"
          />
          <CardContent>
            <Typography>{header}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
