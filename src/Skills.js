import React from "react";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListSubheader
} from "@material-ui/core";

import "./Skills.css";

export default class Skills extends React.Component {
  render() {
    return (
      <div className="skillsPage">
        <h1> Skills </h1>
        <List
          subheader={<ListSubheader>Languages</ListSubheader>}
          className="list"
        >
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemText
              className="cellText"
              primary="Best At"
              secondary="Java, JavaScript, Swift, HTML/CSS"
            />
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemText
              className="cellText"
              primary="Have Used"
              secondary="SQL, C++, C, Python, MATLAB"
            />
          </ListItem>
        </List>

        <List
          subheader={<ListSubheader>Frameworks</ListSubheader>}
          className="list"
        >
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemText
              className="cellText"
              primary="JavaScript"
              secondary="React, Node.js"
            />
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemText
              className="cellText"
              primary="Testing"
              secondary="JUnit, TestNG, Selenium, Jest"
            />
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemText
              className="cellText"
              primary="CI"
              secondary="Jenkins, Git, Subversion"
            />
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemText
              className="cellText"
              primary="Databases"
              secondary="Oracle Database, MySQL"
            />
          </ListItem>
        </List>

        <List
          subheader={<ListSubheader>Miscellaneous</ListSubheader>}
          className="list"
        >
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemText
              className="cellText"
              primary="Software/IDEs"
              secondary="IntelliJ, Eclipse, Xcode, Chrome Developer Tools"
            />
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemText
              className="cellText"
              primary="Other Knowledge"
              secondary="LaTeX, Markdown, Excel, command line"
            />
          </ListItem>
        </List>
      </div>
    );
  }
}
