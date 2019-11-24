import React from "react";
import "./App.css";
import Main from "./Main";
import Header from "./Header";

class App extends React.Component {
  componentDidMount() {
    document.title = "Harrison Wong";
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
