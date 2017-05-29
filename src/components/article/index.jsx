import React from 'react';
import { bool, shape, string } from 'prop-types';
import requestMd from '../../http';
import Markdown from '../markdown/';

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
      text: null,
      lazyMarkdown: null,
    };
  }

  async componentDidMount() {
    const text = await requestMd(this.props.match.params.id);
    // const { id } = this.props.match.params;
    // const text = await import(`../../markdown/${id}.md`);
    // const { default: Markdown } = await import('../markdown/');
    // const [lazyText, { default: Markdown }] = await Promise.all([
    //   requestMd(this.props.match.params.id),
    //   import('../markdown/'),
    // ]);

    (() => {
      this.setState({
        // lazyMarkdown: <Markdown source={text} />,
        text,
      });
    })();
  }

  render() {
    const { text } = this.state;
    console.log(this.props.match.params.id);
    console.log(text);
    return (
      text ? <Markdown source={text} /> : <p>Loading...</p>
    );
  }
}

// Article.propTypes = {
//   match: shape({
//     path: string,
//     url: string,
//     isExact: bool,
//     params: shape({
//       id: string,
//     }),
//   }).isRequired,
// };

export default Article;
