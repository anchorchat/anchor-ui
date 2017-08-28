import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'lodash';
import Table from '../../../dist/table';
import TableHeader from '../../../dist/table-header';
import TableHeaderColumn from '../../../dist/table-header-column';
import TableBody from '../../../dist/table-body';
import TableRow from '../../../dist/table-row';
import TableColumn from '../../../dist/table-column';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Table from \'anchor-ui/table\';';

const TableDoc = () => {
  const componentData = _.find(components, component => component.displayName === 'Table');
  const headerData = _.find(components, component => component.displayName === 'TableHeader');
  const headerColumnData = _.find(components, component => component.displayName === 'TableHeaderColumn');
  const bodyData = _.find(components, component => component.displayName === 'TableBody');
  const rowData = _.find(components, component => component.displayName === 'TableRow');
  const columnData = _.find(components, component => component.displayName === 'TableColumn');

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
    <article className="doc">
      <h1>Table</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Usage</h1>
        <ReactMarkdown source={usage} className="markdown" />
      </section>
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
