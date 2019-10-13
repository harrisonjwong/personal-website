import React from 'react';
import './App.css';
import Face from './Face';
import Main from './Main';
import Header from './Header';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
