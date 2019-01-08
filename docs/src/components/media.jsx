import React, { Component } from 'react';
import find from 'lodash/find';
import Media from '../../../dist/media';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`jsx
  import Media from 'anchor-ui/media'

  const query = {
    large: '(max-width: 1024px)',
    small: '(min-width: 400px)',
    medium: '(min-width: 768px)'
  };

  <Media query={query} onChange={this.setMedia} />
  \`\`\`
`;

const componentData = find(components, { displayName: 'Media' });
const style = {
  paper: {
    margin: '8px 0 0',
    padding: '20px'
  }
};

const query = {
  large: '(max-width: 1024px)',
  small: '(min-width: 400px)',
  medium: '(min-width: 768px)'
};

class MediaDoc extends Component {
  constructor() {
    super();

    this.state = {
      media: {}
    };
  }

  setMedia = (matches) => {
    this.setState({
      media: matches
    });
  }

  render() {
    const { media } = this.state;

    return (
      <article className="page">
        <h1>Media</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <Markdown markdown={usage} title="Code example" />
        <p>The query prop must be an object of valid <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries" target="_blank" rel="noopener noreferrer">CSS Media Queries</a>.</p> {/* eslint-disable-line max-len */}
        <section>
          <h1>Examples</h1>
          <p>Resize your window to change the values</p>
          <Paper style={style.paper}>
            <p>(min-width: 400px): {media.small}</p>
            <p>(min-width: 768px): {media.medium}</p>
            <p>(max-width: 1024px): {media.large}</p>
            <Media query={query} onChange={this.setMedia} />
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default MediaDoc;
