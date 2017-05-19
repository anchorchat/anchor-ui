import React from 'react';
import ReactMarkdown from 'react-markdown';
import Table from '../../../dist/table';
import TableHeader from '../../../dist/table-header';
import TableHeaderColumn from '../../../dist/table-header-column';
import TableBody from '../../../dist/table-body';
import TableRow from '../../../dist/table-row';
import TableColumn from '../../../dist/table-column';

const usage = '```js\n import themeable from \'anchor-ui/themeable\'; \n export default themeable()(YourComponent);';

const ThemeableDoc = () => {
  const customPropName = '```js\n import themeable from \'anchor-ui/themeable\'; \n export default themeable({ propName: \'themeColor\' })(YourComponent);';
  return (
    <article className="doc">
      <h1>ThemeProvider</h1>
      <section>
        <h1>Description</h1>
        <p>
          A higher order component which applies theme to your component by passing a color prop.
          You can change the prop name passed to your component by passing an options object.
        </p>
      </section>
      <section>
        <h1>Usage</h1>
        <ReactMarkdown source={usage} className="markdown" />
        <h1>Usage with propName option</h1>
        <ReactMarkdown source={customPropName} className="markdown" />
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
};

export default ThemeableDoc;
