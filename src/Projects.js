import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import LaunchIcon from "@material-ui/icons/Launch";

import AnimatorPic from "./pictures/Animator2.png";
import MazeGamePic from "./pictures/MazeGame.png";
import GreenLinePic from "./pictures/GreenLine.png";
import WebsitePic from "./pictures/Website.png";
import TicTacToePic from "./pictures/TicTacToe.png";
import "./Projects.css";

export default class Projects extends React.Component {
  render() {
    const tileData = [
      {
        img: AnimatorPic,
        title: "Easy Animator",
        language: "Java (Java Swing)",
        github: "https://github.com/harrisonjwong/animator"
      },
      {
        img: GreenLinePic,
        title: "Green Line Predictions iOS App",
        language: "Swift",
        github: "https://github.com/harrisonjwong/greenline"
      },
      {
        img: WebsitePic,
        title: "Personal Website",
        language: "JavaScript (React)",
        github: "https://github.com/harrisonjwong/personal-website"
      },
      {
        img: TicTacToePic,
        title: "Tic-Tac-Toe",
        language: "Swift",
        github: "https://github.com/harrisonjwong/tictactoe"
      },
      {
        img: MazeGamePic,
        title: "Maze Generator and Solver",
        language: "Java",
        github: "https://github.com/harrisonjwong/mazes"
      }
    ];
    return (
      <div className="imageGrid projectsBackground">
        <GridList cellHeight={250} className="gridList">
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>Language: {tile.language}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${tile.title}`}
                    className="button"
                    title="GitHub"
                  >
                    <LaunchIcon
                      onClick={() => {
                        window.location.href = tile.github;
                      }}
                    />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

// <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
//   <ListSubheader component="div">Projects</ListSubheader>
// </GridListTile>
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

/*
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
        <Paper className="commonSquare websiteSquare">xs=6</Paper>
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
*/
