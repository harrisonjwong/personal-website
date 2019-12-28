import React from "react";
import face from "./face.png";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./Face.css";

export default class Face extends React.Component {
  render() {
    return (
      <div className="face">
        <header className="faceHeader">
          <img src={face} className="facePic" alt="my face" />
          <p>Harrison Wong</p>
          <p>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Button variant="outlined" color="primary" renderAs="button">
                <span>About</span>
              </Button>
            </Link>
          </p>
        </header>
      </div>
    );
  }
}
