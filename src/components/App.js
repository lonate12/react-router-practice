import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

// Components
import Home from './Home';
import Header from './Header';
import Featured from './Featured';
import About from './About';
import Courses from './Courses';
import Teachers from './Teachers';
import NotFound from './NotFound';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/react-router-practice" component={Home}/>
        <Route path="/about" render={ () => <About title='About Us!'/> }/>
        <Route path="/courses" component={Courses}/>
        <Route exact path="/teachers" component={Teachers}/>
        <Route path="/teachers/:topic/:name" component={Featured}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
