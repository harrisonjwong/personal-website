import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import {
  Menu,
  Home,
  Description,
  Stars,
  PermIdentity,
  Dashboard
} from "@material-ui/icons";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      headerTitle: "Harrison Wong",
      isDrawerOpen: false
    };
  }

  render() {
    const menuObjectList = [
      {
        location: "/",
        icon: <Home />,
        onClick: () =>
          this.setState({ headerTitle: "Home", isDrawerOpen: false }),
        text: "Home"
      },
      {
        location: "/projects",
        icon: <Description />,
        onClick: () =>
          this.setState({ headerTitle: "Projects", isDrawerOpen: false }),
        text: "Projects"
      },
      {
        location: "/skills",
        icon: <Stars />,
        onClick: () =>
          this.setState({ headerTitle: "Skills", isDrawerOpen: false }),
        text: "Skills"
      },
      {
        location: "/interests",
        icon: <Dashboard />,
        onClick: () =>
          this.setState({ headerTitle: "Interests", isDrawerOpen: false }),
        text: "Interests"
      },
      {
        location: "/about",
        icon: <PermIdentity />,
        onClick: () =>
          this.setState({ headerTitle: "About", isDrawerOpen: false }),
        text: "About"
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
