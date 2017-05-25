import React from 'react';
// import R from 'ramda';
import ReactMarkdown from 'react-markdown';
// import Hello from './components/hello';
import styled from 'styled-components';
import showMarkdown from './http';

const input = '# This is a  header\nAnd this is a paragraph. And this is a paragraph. And this is a paragraph. And this is a paragraph. And this is a paragraph. And this is a paragraph. And this is a paragraph. And this is a paragraph. And this is a paragraph. And this is a paragraph. And this is a paragraph.\nAnd this is a paragraph. And this is a paragraph. And this is a paragraph. And this is a paragraph. And this is a paragraph. And this is a paragraph. And this is a paragraph. And this is a paragraph. And this is a paragraph. And this is a paragraph. And this is a [paragraph](https://www.google.com "Google\'s Homepage").';

showMarkdown('test.md', console.log);

const Markdown = styled(ReactMarkdown)`
  --line-height: 1.33;
  --vertical-rhytm: calc(1rem * var(--line-height));
  font-family: 'Istok Web', sans-serif;
  max-width: 700px;
  margin: calc(5rem + 1vmax) auto;
  padding: 0 1rem;
  /*styling child element*/
  & > h1 {
    font-size: calc(5rem + 1vmax);
    margin-bottom: var(--vertical-rhytm);
  }
  & > p {
    font-size: calc(1rem + 1vmax);
    line-height: var(--line-height);
  }
`;

const App = () =>
  // <Hello>Hello New App!!</Hello>;
  <Markdown source={input} />;

export default App;
