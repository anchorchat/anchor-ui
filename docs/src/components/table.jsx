import React from 'react';
import find from 'lodash/find';
import Table from '../anchor-ui/table';
import TableHeader from '../anchor-ui/table-header';
import TableHeaderColumn from '../anchor-ui/table-header-column';
import TableBody from '../anchor-ui/table-body';
import TableRow from '../anchor-ui/table-row';
import TableColumn from '../anchor-ui/table-column';
import Props from './props';
import components from '../components.json';
import Paper from '../anchor-ui/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`jsx
  import Table from 'anchor-ui/table';
  import TableHeader from 'anchor-ui/table-header';
  import TableHeaderColumn from 'anchor-ui/table-header-column';
  import TableBody from 'anchor-ui/table-body';
  import TableRow from 'anchor-ui/table-row';
  import TableColumn from 'anchor-ui/table-column';

  const MyTable = () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>Column 1</TableHeaderColumn>
          <TableHeaderColumn>Column 2</TableHeaderColumn>
          <TableHeaderColumn>Column 3</TableHeaderColumn>
          <TableHeaderColumn>Column 4</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableColumn>Row 1</TableColumn>
          <TableColumn>Row 1</TableColumn>
          <TableColumn>Row 1</TableColumn>
          <TableColumn>Row 1</TableColumn>
        </TableRow>
        <TableRow>
          <TableColumn>Row 2</TableColumn>
          <TableColumn>Row 2</TableColumn>
          <TableColumn>Row 2</TableColumn>
          <TableColumn>Row 2</TableColumn>
        </TableRow>
        <TableRow>
          <TableColumn>Row 3</TableColumn>
          <TableColumn>Row 3</TableColumn>
          <TableColumn>Row 3</TableColumn>
          <TableColumn>Row 3</TableColumn>
        </TableRow>
        <TableRow>
          <TableColumn>Row 4</TableColumn>
          <TableColumn>Row 4</TableColumn>
          <TableColumn>Row 4</TableColumn>
          <TableColumn>Row 4</TableColumn>
        </TableRow>
      </TableBody>
    </Table>
  );
  \`\`\`
`;

const componentData = find(components, { displayName: 'Table' });
const headerData = find(components, { displayName: 'TableHeader' });
const headerColumnData = find(components, { displayName: 'TableHeaderColumn' });
const bodyData = find(components, { displayName: 'TableBody' });
const rowData = find(components, { displayName: 'TableRow' });
const columnData = find(components, { displayName: 'TableColumn' });

const TableDoc = () => {
  const style = {
    paper: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: 0,
      padding: '20px'
    },
    tabs: { margin: '10px' }
  };

  return (
    <article className="page">
      <h1>Table</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <Markdown markdown={usage} title="Code example" />
      <section>
        <h1>Examples</h1>
        <Paper style={style.paper}>
          <Table style={style.tabs}>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>Column 1</TableHeaderColumn>
                <TableHeaderColumn>Column 2</TableHeaderColumn>
                <TableHeaderColumn>Column 3</TableHeaderColumn>
                <TableHeaderColumn>Column 4</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableColumn>Row 1</TableColumn>
                <TableColumn>Row 1</TableColumn>
                <TableColumn>Row 1</TableColumn>
                <TableColumn>Row 1</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>Row 2</TableColumn>
                <TableColumn>Row 2</TableColumn>
                <TableColumn>Row 2</TableColumn>
                <TableColumn>Row 2</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>Row 3</TableColumn>
                <TableColumn>Row 3</TableColumn>
                <TableColumn>Row 3</TableColumn>
                <TableColumn>Row 3</TableColumn>
              </TableRow>
              <TableRow>
                <TableColumn>Row 4</TableColumn>
                <TableColumn>Row 4</TableColumn>
                <TableColumn>Row 4</TableColumn>
                <TableColumn>Row 4</TableColumn>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </section>
      <h2>Table</h2>
      <Props props={componentData.props} />
      <h2>TableHeader</h2>
      <Props props={headerData.props} />
      <h2>TableHeaderColumn</h2>
      <Props props={headerColumnData.props} />
      <h2>TableBody</h2>
      <Props props={bodyData.props} />
      <h2>TableRow</h2>
      <Props props={rowData.props} />
      <h2>TableColumn</h2>
      <Props props={columnData.props} />
    </article>
  );
};

export default TableDoc;
