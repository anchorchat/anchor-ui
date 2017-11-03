import React from 'react';
import _ from 'lodash';
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

class SearchBoxDoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.currentTarget.value });
  }

  render() {
    const componentData = _.find(components, component => component.displayName === 'SearchBox');
    const style = {
      paper: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        margin: 0,
        padding: '20px'
      }
    };

    return (
      <article className="doc">
        <h1>SearchBox</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <Markdown markdown={usage} title="Code example" />
        <section>
          <h1>Examples</h1>
          <Paper style={style.paper}>
            <SearchBox onChange={this.handleChange} changeSearchQuery={() => {}} placeholder="Search" value={this.state.value} />
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default SearchBoxDoc;
