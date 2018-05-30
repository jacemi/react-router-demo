import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Planets from './Planets';
import NoMatch from './NoMatch';
import JarJar from './JarJar';

const Main = props => (
  <main className="page-content">
    <Switch>
      <Route exact={true} path="/" component={Home}/>
      <Route path="/planets" component={Planets}/>
      <Route path="/jarjar" component={JarJar}/>    
      <Route component={NoMatch}/>
    </Switch>
  </main>
)

export default Main