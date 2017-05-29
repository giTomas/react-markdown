import React from 'react';
import {
  Route,
  Link,
  HashRouter as Router,
} from 'react-router-dom';
import PropTypes from 'prop-types';
// import R from 'ramda';
import { Article } from './components/';

const articles = [
  'test',
  'test2',
  'test3',
];

const Articles = ({ match }) => (
  <div>Articles
    <ul>
      {articles.map(article =>
    // <li><Link to={`/articles/${item}`}>test</Link></li>
        <li key={article}><Link to={`${match.url}/${article}`}>{article}</Link></li>)}
    </ul>
    <Route path={`${match.url}/:id`} component={Article} />
  </div>);

Articles.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,
    // params: shape({
    //   id: string,
    // }),
  }).isRequired,
};

const Default = () => <h1>Deafult</h1>;

const App = () => (
  <Router>
    <div>
      <h1>Articles</h1>
      <ul>
        <li><Link to="/">Home</Link></li>

        <li><Link to="/articles">articles</Link></li>
      </ul>

      <Route exact path="/" component={Default} />
      <Route path="/articles" component={Articles} />
    </div>
  </Router>
);

export default App;
