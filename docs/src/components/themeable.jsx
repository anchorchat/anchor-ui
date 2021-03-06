import React from 'react';
import Table from '../anchor-ui/table';
import TableHeader from '../anchor-ui/table-header';
import TableHeaderColumn from '../anchor-ui/table-header-column';
import TableBody from '../anchor-ui/table-body';
import TableRow from '../anchor-ui/table-row';
import TableColumn from '../anchor-ui/table-column';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import themeable from 'anchor-ui/themeable';
  import MyComponent from './my-component';

  export default themeable()(MyComponent);
  \`\`\`
`;

const customPropName = `
  \`\`\`js
  import themeable from 'anchor-ui/themeable';
  import MyComponent from './my-component';

  export default themeable({ propName: 'themeColor' })(MyComponent);
  \`\`\`
`;

const ThemeableDoc = () => (
  <article className="page">
    <h1>ThemeProvider</h1>
    <section>
      <h1>Description</h1>
      <p>
        A higher order component which applies theme to your component by passing a color prop.
        You can change the prop name passed to your component by passing an options object.
      </p>
    </section>
    <section>
      <Markdown markdown={usage} title="Code example" />
      <Markdown markdown={customPropName} title="Usage with propName option" />
    </section>
    <section>
      <h1>Options</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Type</TableHeaderColumn>
            <TableHeaderColumn>Description</TableHeaderColumn>
            <TableHeaderColumn>Default value</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableColumn>propName</TableColumn>
            <TableColumn>String</TableColumn>
            <TableColumn>Custom prop name for theme color</TableColumn>
            <TableColumn>color</TableColumn>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  </article>
);

export default ThemeableDoc;
