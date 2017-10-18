import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'lodash';
import Media from '../../../dist/media';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Media from \'anchor-ui/media\';';

class MediaDoc extends Component {
  constructor() {
    super();

    this.state = {
      '(min-width: 800px)': false
    };
  }

  setMedia = (query, matches) => {
    this.setState({
      [query]: matches
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

    return (
      <article className="doc">
        <h1>Media</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <section>
          <h1>Usage</h1>
          <ReactMarkdown source={usage} className="markdown" />
          <p>The query prop must be a valid <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries" target="_blank" rel="noopener noreferrer">CSS Media Query</a>.</p>
        </section>
        <section>
          <h1>Examples</h1>
          <p>Resize your window to change the values</p>
          <Paper style={style.paper}>
            <p>(min-width: 400px): {`${this.state['(min-width: 400px)']}`}</p>
            <p>(min-width: 768px): {`${this.state['(min-width: 768px)']}`}</p>
            <p>(max-width: 1024px): {`${this.state['(max-width: 1024px)']}`}</p>
            <Media query="(min-width: 400px)" onChange={this.setMedia} />
            <Media query="(min-width: 768px)" onChange={this.setMedia} />
            <Media query="(max-width: 1024px)" onChange={this.setMedia} />
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default MediaDoc;
