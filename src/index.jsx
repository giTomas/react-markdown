import React from 'react';
import {
  Route,
  Link,
  Switch,
} from 'react-router-dom';
// import R from 'ramda';
import { Article } from './components/';

const App = () => (
  <div>
    <h1>Articles</h1>
    <ul>
      <li><Link to="/articles/test">test</Link></li>
    </ul>

    <Switch>
      <Route path="/articles/:id" component={Article} />
    </Switch>
  </div>
);

export default App;
