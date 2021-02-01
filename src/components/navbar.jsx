import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    //background: "linear-gradient(45deg, #FFFFFF 40%, black 100%)",
    background: "#FFFFFF",
  },
  logoButton: {
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(10),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    fontSize: 14,
  },
  logo: {
    width: 80,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.logoButton}
            aria-label="menu"
            href="#"
          >
            <img className={classes.logo} src="logo.jpeg"></img>
          </IconButton>
          <Button className={classes.menuButton}>Home</Button>
          <Button className={classes.menuButton}>Courses</Button>
          <Button className={classes.menuButton}>Testimonials</Button>
          <Button className={classes.menuButton}>About us</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
