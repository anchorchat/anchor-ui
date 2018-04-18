import React from 'react';
import Table from '../../../dist/table';
import TableHeader from '../../../dist/table-header';
import TableHeaderColumn from '../../../dist/table-header-column';
import TableBody from '../../../dist/table-body';
import TableRow from '../../../dist/table-row';
import TableColumn from '../../../dist/table-column';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import withTheme from 'anchor-ui/with-theme';
  import MyComponent from './my-component';

  export default withTheme(MyComponent);
  \`\`\`
`;

const WithThemeDoc = () => (
  <article className="page">
    <h1>withTheme</h1>
    <section>
      <h1>Description</h1>
      <p>
        A higher order component which applies theme to your component by passing a color prop.
      </p>
    </section>
    <section>
      <Markdown markdown={usage} title="Code example" />
    </section>
    <section>
      <h1>Arguments</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Type</TableHeaderColumn>
            <TableHeaderColumn>Description</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableColumn>Component</TableColumn>
            <TableColumn>React component</TableColumn>
            <TableColumn>Component to wrap</TableColumn>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  </article>
);

export default WithThemeDoc;
