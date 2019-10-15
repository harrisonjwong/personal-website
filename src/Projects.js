import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AnimatorPic from "./Animator.png";
import MazeGamePic from "./MazeGame.png";
import GreenLinePic1 from "./GreenLine1.png";
import GreenLinePic2 from "./GreenLine2.png";
import "./Projects.css";

export default class Projects extends React.Component {
  render() {
    return (
      <div className="projectsBackground">
        <div className="wholeGrid">
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper className="commonSquare animatorSquare">
                <img
                  src={AnimatorPic}
                  className="animatorPic"
                  alt="animator project"
                />
                <br />
                Easy Animator
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className="commonSquare greenLineSquare">
                <img
                  src={GreenLinePic1}
                  className="greenLinePic"
                  alt="green line app 1"
                />
                <img
                  src={GreenLinePic2}
                  className="greenLinePic"
                  alt="green line app 2"
                />
                <br />
                Green Line iOS App
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className="commonSquare mazeGameSquare">
                <img
                  src={MazeGamePic}
                  className="mazeGamePic"
                  alt="maze game project"
                />
                <br />
                Maze Game
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className="commonSquare">xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className="commonSquare">xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className="commonSquare">xs=6</Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
/*
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
*/
