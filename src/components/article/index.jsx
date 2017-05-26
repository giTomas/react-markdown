import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const Article = styled(ReactMarkdown)`
  --line-height: 1.4;
  --base-font-size: calc(1rem + (1.33 - 1) * ((100vw - 18.75em) / (75 - 18.75)));
  --vertical-rhytm: calc(var(--base-font-size) * var(--line-height));
  font-size: var(--base-font-size);
  font-family: 'Istok Web', sans-serif;
  max-width: 43.75em;
  margin: calc(var(--vertical-rhytm) * 2) auto calc(var(--vertical-rhytm) * 8);
  padding: 0 var(--vertical-rhytm);
  /*styling child element*/
  & > h1 {
    font-size: 2.369em;
    margin-top: calc(var(--vertical-rhytm) * 2)
    margin-bottom: var(--vertical-rhytm);
  }
  & > p {
    font-size: 1em;
    line-height: var(--line-height);
    margin-bottom: var(--vertical-rhytm);
    color: SlateGrey;
  }
`;

export default Article;
