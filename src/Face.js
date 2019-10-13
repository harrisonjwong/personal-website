import React from 'react';
import face from './face.png';
import './Face.css';

export default class Face extends React.Component {

  render() {
    return (
      <div className="face">
        <header className="App-header">
          <img src={face} className="facePic" alt="my face"/>
          <p>
            Harrison Wong
          </p>
        </header>
      </div>
    );
  }
}
