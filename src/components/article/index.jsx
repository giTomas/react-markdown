import React from 'react';
import PropTypes from 'prop-types';
import getMd from '../../http';
import Markdown from '../markdown/';

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: null,
    };
  }

  componentDidMount() {
    (async () => {
      const { id } = this.props.match.params;
      const text = await getMd(id);
      this.setState({ text });
    })();
  }

  render() {
    const { text } = this.state;
    return (
      text ? <Markdown source={text} /> : <p>Loading...</p>
    );
  }
}

Article.propTypes = {
  // file: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
};

export default Article;
