import React from "react";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  ListSubheader,
  Avatar,
  Typography
} from "@material-ui/core";

import "./About.css";
import Northeastern from "./pictures/northeastern.png";
import Poweradv from "./pictures/poweradv.png";
import Cisco from "./pictures/cisco.jpg";
import Nshs from "./pictures/nshs.png";
import Github from "./pictures/github.png";
import Linkedin from "./pictures/linkedin.png";
import Email from "./pictures/mail2.png";
import Resume from "./pictures/resume.png";

export default class About extends React.Component {
  render() {
    return (
      <div className="aboutPage">
        <div className="header">
          <h1> About </h1>
          <div className="blurb">
            I am a software engineer and currently a senior at Northeastern
            University, graduating in May 2021.
          </div>
          <div className="socials">
            <a
              className="socialImage"
              href="https://github.com/harrisonjwong"
              target="_blank"
              rel="noopener noreferrer"
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
              rel="noopener noreferrer"
            >
              <img
                src={Linkedin}
                title="LinkedIn"
                alt="LinkedIn"
                style={{ width: "50px" }}
              />
            </a>
            <a className="socialImage" href="mailto:harrisonjwong@gmail.com">
              <img
                src={Email}
                title="Email Me"
                alt="Email"
                style={{ width: "50px" }}
              />
            </a>
            <a
              className="socialImage"
              href="https://github.com/harrisonjwong/resume/blob/master/Harrison_Wong_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
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
              <Avatar sizes="100" alt="Cisco Logo" src={Cisco} />
            </ListItemAvatar>
            <ListItemText
              className="cellText"
              primary={
                <React.Fragment>
                  <Typography variant="subtitle1" color="textPrimary">
                    Software Engineer Co-op
                  </Typography>
                  <Typography variant="body2" color="textPrimary">
                    Cisco, Cambridge, MA
                  </Typography>
                  <Typography variant="body2" color="textPrimary">
                    May 2020 – December 2020
                  </Typography>
                </React.Fragment>
              }
              secondary={
                <React.Fragment>
                  <Typography variant="body2" color="inherit">
                    • Wrote code in a full-stack SaaS web application, with a
                    Java Spring back end and an Angular front end.
                  </Typography>
                  <Typography variant="body2" color="inherit">
                    • Worked on a scrum team with weekly sprints,
                    retrospectives, planning, and demos.
                  </Typography>
                  <Typography variant="body2" color="inherit">
                    • Maintained and developed new unit, integration, and
                    end-to-end tests.
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
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
                    • Rewrote a high-traffic page in a main company product to
                    enhance usability and remove pain points; modernized
                    decade-old code with a new front end in React and enhanced
                    back end using Java Spring
                  </Typography>
                  <Typography variant="body2" color="inherit">
                    • Worked in an existing microservice-based architecture
                    hosted on AWS, including designing and developing a new Node
                    microservice to parse and validate data from S3 and record
                    results from sending it to a machine learning algorithm
                  </Typography>
                  <Typography variant="body2" color="inherit">
                    • Developed on a full stack SaaS web application with React,
                    Node.js, and Java Spring including creation of new features
                    and bug fixes
                  </Typography>
                  <Typography variant="body2" color="inherit">
                    • Demoed and explained new features to company leadership to
                    show business value
                  </Typography>
                  <Typography variant="body2" color="inherit">
                    • Worked with product owners to negotiate criteria for
                    features to provide maximum value for time spent
                  </Typography>
                  <Typography variant="body2" color="inherit">
                    • Participated in a continuous integration testing
                    environment and practiced agile development
                  </Typography>
                  <Typography variant="body2" color="inherit">
                    • Worked collaboratively using pair programming with all
                    levels of developers
                  </Typography>
                  <Typography variant="body2" color="inherit">
                    • Interviewed future co-op candidates to evaluate their
                    skills, technical knowledge, and fit to the company
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
                    Khoury College of Computer Sciences, Boston, MA
                  </Typography>
                  <Typography variant="body2" color="textPrimary">
                    January 2019 – April 2019, January 2020 – April 2020
                  </Typography>
                </React.Fragment>
              }
              secondary={
                <React.Fragment>
                  <Typography variant="body2" color="inherit">
                    • Work with students in Fundamentals of Computer Science to
                    teach concepts and answer questions
                  </Typography>
                  <Typography variant="body2" color="inherit">
                    • Hold office hours and run labs to help students with
                    coding assignments
                  </Typography>
                  <Typography variant="body2" color="inherit">
                    • Grade coding assignments and exams in a timely manner
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>

        <br />
        <Divider />

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
                    Bachelor of Science, majoring in Computer Engineering and
                    Computer Science
                  </Typography>
                  <Typography variant="body2" color="textPrimary">
                    GPA: 3.93 / 4.00
                  </Typography>
                  <Typography variant="body2" color="textPrimary">
                    September 2017 – May 2021
                  </Typography>
                </React.Fragment>
              }
              secondary="Relevant Coursework: Software Development, Web Development, Database Design, Capstone Project"
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
  }
}
