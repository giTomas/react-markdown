import React from 'react';
// import R from 'ramda';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import showMarkdown from './http';
// import Hello from './components/hello';

const Article = styled(ReactMarkdown)`

  --line-height: 1.4;
  --base-font-size: calc(16px + (26 - 16) * ((100vw - 300px) / (1400 - 300)));
  --vertical-rhytm: calc(var(--base-font-size) * var(--line-height));
  font-size: var(--base-font-size);
  font-family: 'Istok Web', sans-serif;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 1rem;
  /*styling child element*/
  & > h1 {
    font-size: 2em;
    margin-top: calc(var(--vertical-rhytm) * 2)
    margin-bottom: var(--vertical-rhytm);
  }
  & > p {
    line-height: var(--line-height);
    margin-bottom: var(--vertical-rhytm);
    color: SlateGrey;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: null,
    };
  }

  componentDidMount() {
    (async () => {
      const text = await showMarkdown('test');
      this.setState({ text });
    })();
  }

  render() {
    const { text } = this.state;
    return (
      text ? <Article source={text} /> : <p>Loading...</p>
    );
  }
}

export default App;
