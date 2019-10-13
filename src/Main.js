import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Face from './Face';
import Projects from './Projects';
import Skills from './Skills';

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Face}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/skills' component={Skills}/>
        </Switch>
      </main>
    );
  }
}
