import React from 'react';
// import R from 'ramda';
import PropTypes from 'prop-types';
import showMarkdown from './http';
import Article from './components/article/';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: null,
    };
  }

  componentDidMount() {
    (async () => {
      const text = await showMarkdown(this.props.file);
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

App.propTypes = {
  file: PropTypes.string.isRequired,
};

export default App;
