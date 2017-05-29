import React from 'react';
import {
  Route,
  Link,
} from 'react-router-dom';
// import R from 'ramda';
import { Article } from './components/';

const articles = [
  'test',
  'test2',
  'test3',
];

const links = articles.map(article =>
    // <li><Link to={`/articles/${item}`}>test</Link></li>
  <li key={article}><Link to={`/articles/${article}`}>{article}</Link></li>,
);

const App = () => (

  <div>
    <h1>Articles</h1>
    <ul>
      {links}
      <li><Link to="/articles/test2">article2</Link></li>
    </ul>


    <Route path="/articles/:id" component={Article} />

  </div>
);

export default App;
