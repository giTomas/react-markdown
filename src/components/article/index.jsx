import React from 'react';
import { bool, shape, string } from 'prop-types';
// import requestMd from '../../http';
// import Markdown from '../markdown/';

class Article extends React.Component {
  static propTypes = {
    match: shape({
      path: string,
      url: string,
      isExact: bool,
      params: shape({
        id: string,
      }),
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      // text: null,
      lazyMarkdown: null,
    };
  }

  async componentDidMount() {
    // const text = await requestMd(this.props.match.params.id);
    const { id } = this.props.match.params;
    // const text = await import(`../../markdown/${id}.md`);
    // const { default: Markdown } = await import('../markdown/');
    const [lazyText, { default: Markdown }] = await Promise.all([
      import(`../../markdown/${id}.md`),
      import('../markdown/'),
    ]);

    (() => {
      this.setState({
        lazyMarkdown: <Markdown source={lazyText} />,
      });
    })();
  }

  render() {
    return (
      this.state.lazyMarkdown || <p>Loading...</p>
    );
  }
}

// Article.propTypes = {
//   match: PropTypes.shape({
//     path: PropTypes.string,
//     url: PropTypes.string,
//     isExact: PropTypes.bool,
//     params: PropTypes.shape({
//       id: PropTypes.string,
//     }),
//   }).isRequired,
// };

export default Article;
