import React, { Component } from 'react';
import find from 'lodash/find';
import noop from 'lodash/noop';
import SearchBox from '../../../dist/search-box';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import SearchBox from 'anchor-ui/search-box';
  \`\`\`
`;

const componentData = find(components, { displayName: 'SearchBox' });
const style = {
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 0,
    padding: '20px'
  }
};

class SearchBoxDoc extends Component {
  state = {
    value: ''
  }

  handleChange = (event) => {
    this.setState({ value: event.currentTarget.value });
  }

  render() {
    return (
      <article className="page">
        <h1>SearchBox</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <Markdown markdown={usage} title="Code example" />
        <section>
          <h1>Examples</h1>
          <Paper style={style.paper}>
            <SearchBox onChange={this.handleChange} changeSearchQuery={noop} placeholder="Search" value={this.state.value} />
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default SearchBoxDoc;
