import React from "react";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  ListSubheader,
  Avatar,
  Button,
  Typography
} from "@material-ui/core";

import "./About.css";
import Northeastern from "./pictures/northeastern.png";
import Poweradv from "./pictures/poweradv.png";
import Nshs from "./pictures/nshs.png";
import Github from "./pictures/github.png";
import Linkedin from "./pictures/linkedin.png";
import Email from "./pictures/mail.png";
import Resume from "./pictures/resume.png";

export default class About extends React.Component {
  render() {
    return (
      <div className="aboutPage">
        <div className="header">
          <h1> About </h1>
          <div className="blurb">
            I am an aspiring Software Engineer and currently a junior at
            Northeastern University (graduating May 2021).
          </div>
          <div className="socials">
            <a
              className="socialImage"
              href="https://github.com/harrisonjwong"
              target="_blank"
            >
              <img
                src={Github}
                title="GitHub"
                alt="GitHub"
                style={{ width: "50px" }}
              />
            </a>
            <a
              className="socialImage"
              href="https://linkedin.com/in/harrisonjwong"
              target="_blank"
            >
              <img
                src={Linkedin}
                title="LinkedIn"
                alt="LinkedIn"
                style={{ width: "50px" }}
              />
            </a>
            <a className="socialImage" href="mailto:wong.ha@husky.neu.edu">
              <img
                src={Email}
                title="Email Me"
                alt="Email"
                style={{ width: "50px" }}
              />
            </a>
            <a
              className="socialImage"
              href="https://drive.google.com/file/d/1C06BjKmQ80VJdZ8SROlwKT5N441TksOc/view?usp=sharing"
              target="_blank"
            >
              <img
                src={Resume}
                title="My Resume"
                alt="Resume"
                style={{ width: "50px" }}
              />
            </a>
          </div>
        </div>

        <List
          subheader={<ListSubheader>Experience</ListSubheader>}
          className="list"
        >
          <Divider />

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar sizes="100" alt="PowerAdvocate Logo" src={Poweradv} />
            </ListItemAvatar>
            <ListItemText
              className="cellText"
              primary={
                <React.Fragment>
                  <Typography variant="subtitle1" color="textPrimary">
                    Software Developer Co-op
                  </Typography>
                  <Typography variant="body2" color="textPrimary">
                    PowerAdvocate, Boston, MA
                  </Typography>
                  <Typography variant="body2" color="textPrimary">
                    July 2019 – December 2019
                  </Typography>
                </React.Fragment>
              }
              secondary={
                <React.Fragment>
                  <Typography variant="body2" color="inherit">
                    • Develop a full stack SaaS web application with React,
                    Node.js, and Java Spring
                  </Typography>
                  <Typography variant="body2" color="inherit">
                    • Use Jenkins to practice continuous integration and
                    preemptively solve issues while developing new features
                  </Typography>
                  <Typography variant="body2" color="inherit">
                    • Practice Agile development and working collaboratively
                    with pair programming
                  </Typography>
                  <Typography variant="body2" color="inherit">
                    • Participate in entire software development process
                    including planning, development, iteration, testing, code
                    review, and release
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Northeastern Seal" src={Northeastern} />
            </ListItemAvatar>
            <ListItemText
              className="cellText"
              primary={
                <React.Fragment>
                  <Typography variant="subtitle1" color="textPrimary">
                    Teaching Assistant
                  </Typography>
                  <Typography variant="body2" color="textPrimary">
                    Northeastern University Khoury College of Computer Sciences,
                    Boston, MA
                  </Typography>
                  <Typography variant="body2" color="textPrimary">
                    January 2019 – April 2019
                  </Typography>
                </React.Fragment>
              }
              secondary={
                <React.Fragment>
                  <Typography variant="body2" color="inherit">
                    • Hold office hours to help students with coding assignments
                  </Typography>
                  <Typography variant="body2" color="inherit">
                    • Assist professors with grading coding assignments and
                    exams
                  </Typography>
                  <Typography variant="body2" color="inherit">
                    • Help run labs to give students hands on experience with
                    programming concepts
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>

        <br />
        <List
          subheader={<ListSubheader>Education</ListSubheader>}
          className="list"
        >
          <Divider />

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar sizes="100" alt="Northeastern Seal" src={Northeastern} />
            </ListItemAvatar>
            <ListItemText
              className="cellText"
              primary={
                <React.Fragment>
                  <Typography variant="subtitle1" color="textPrimary">
                    Northeastern University, Boston, MA
                  </Typography>
                  <Typography variant="body2" color="textPrimary">
                    BS in Computer Engineering and Computer Science
                  </Typography>
                  <Typography variant="body2" color="textPrimary">
                    GPA: 3.93
                  </Typography>
                  <Typography variant="body2" color="textPrimary">
                    September 2017 – May 2021
                  </Typography>
                </React.Fragment>
              }
              secondary="Relevant Coursework: Object-Oriented Design, Algorithms and Data, Embedded Design"
            />
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar sizes="100" alt="Newton South Seal" src={Nshs} />
            </ListItemAvatar>
            <ListItemText
              className="cellText"
              primary={
                <React.Fragment>
                  <Typography variant="subtitle1" color="textPrimary">
                    Newton South High School, Newton, MA
                  </Typography>
                  <Typography variant="body2" color="textPrimary">
                    September 2013 – May 2017
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </div>
    );

    // return (
    //   <div className="aboutPage">
    //     <h1> About </h1>
    //
    //     <div className="blurb">
    //       I am an aspiring Software Engineer and currently a junior at
    //       Northeastern University (graduating May 2021).
    //     </div>
    //
    //     <h3> Links </h3>
    //
    //     <div className="links">LinkedIn GitHub Resume.pdf Email</div>
    //
    //     <h3> Experience </h3>
    //
    //     <div className="experience">
    //       Software Developer Co-op (PowerAdvocate, Boston, MA) Jul - Dec 2019
    //       <br />
    //       Teaching Assistant (Northeastern University, Boston, MA) Jan - Apr
    //       2019
    //     </div>
    //
    //     <h3> Education </h3>
    //
    //     <div className="education">
    //       Northeastern University BS in Computer Engineering and Computer
    //       Science
    //       <br />
    //       Classes: Object-Oriented Design, Algorithms and Data, Embedded Design
    //       <br />
    //       <br />
    //       Newton South High School
    //     </div>
    //   </div>
    // );
  }
}
