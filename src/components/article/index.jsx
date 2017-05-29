import React from 'react';
import PropTypes from 'prop-types';
import requestMd from '../../http';
// import Markdown from '../markdown/';

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // text: null,
      lazyMarkdown: null,
    };
  }
  // add promise all?
  // find why can't be cobstructed srting with string literals
  async componentDidMount() {
    const text = await requestMd(this.props.match.params.id);
    const mod = '../markdown/';
    const { default: Markdown } = await import(mod);
    (() => {
      this.setState({
        lazyMarkdown: <Markdown source={text} />,
      });
    })();
  }

  render() {
    // const { text } = this.state;
    return (
      this.state.lazyMarkdown || <p>Loading...</p>
    );
  }
}

Article.propTypes = {
  // file: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
};

export default Article;
