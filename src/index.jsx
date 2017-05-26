import React from 'react';
// import R from 'ramda';
import {
  HashRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import { Article } from './components/';

const App = () => (
  <Router>
    <div>
      <h1>Articles</h1>
      <ul>
        <li><Link to="/articles/test">test</Link></li>
      </ul>

      <Route path="/articles/:id" component={Article} />
    </div>
  </Router>
);

export default App;
