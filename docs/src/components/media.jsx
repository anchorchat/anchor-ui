import React, { Component } from 'react';
import _ from 'lodash';
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
    const componentData = _.find(components, component => component.displayName === 'Media');
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

    return (
      <article className="doc">
        <h1>Media</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <Markdown markdown={usage} title="Code example" />
        <p>The query prop must be an object of valid <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries" target="_blank" rel="noopener noreferrer">CSS Media Queries</a>.</p>
        <section>
          <h1>Examples</h1>
          <p>Resize your window to change the values</p>
          <Paper style={style.paper}>
            <p>(min-width: 400px): {`${this.state.media.small}`}</p>
            <p>(min-width: 768px): {`${this.state.media.medium}`}</p>
            <p>(max-width: 1024px): {`${this.state.media.large}`}</p>
            <Media query={query} onChange={this.setMedia} />
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default MediaDoc;
