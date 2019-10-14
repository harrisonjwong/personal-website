import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { Menu, Home, Description, Stars } from "@material-ui/icons";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerTitle: "Home",
      isDrawerOpen: false
    };
  }

  render() {
    const menuObjectList = [
      {
        location: "/",
        icon: <Home />,
        onClick: () => this.setState({ headerTitle: "Home" }),
        text: "Home"
      },
      {
        location: "/projects",
        icon: <Description />,
        onClick: () => this.setState({ headerTitle: "Projects" }),
        text: "Projects"
      },
      {
        location: "/skills",
        icon: <Stars />,
        onClick: () => this.setState({ headerTitle: "Skills" }),
        text: "Skills"
      }
    ];

    const menuList = (
      <div className="lul">
        <List>
          {menuObjectList.map(obj => {
            return (
              <Link to={obj.location} style={{ textDecoration: "none" }}>
                <ListItem button onClick={obj.onClick}>
                  <ListItemIcon>{obj.icon}</ListItemIcon>
                  <ListItemText primary={obj.text} />
                </ListItem>
              </Link>
            );
          })}
        </List>
      </div>
    );
    return (
      <div className="lul">
        <Drawer
          open={this.state.isDrawerOpen}
          onClose={() => this.setState({ isDrawerOpen: false })}
        >
          {menuList}
        </Drawer>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => this.setState({ isDrawerOpen: true })}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6">{this.state.headerTitle}</Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

/*
<header>
  <nav>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/projects'>Projects</Link></li>
      <li><Link to='/skills'>Skills</Link></li>
    </ul>
  </nav>
</header>
*/
