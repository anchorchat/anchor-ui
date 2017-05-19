import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Pagination from '../../../dist/pagination';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';
import Table from '../../../dist/table';
import TableHeader from '../../../dist/table-header';
import TableHeaderColumn from '../../../dist/table-header-column';
import TableBody from '../../../dist/table-body';
import TableRow from '../../../dist/table-row';
import TableColumn from '../../../dist/table-column';

const usage = '```js\n import Pagination from \'anchor-ui/pagination\';';

const range = _.range(1, 351);
const list = _.map(range, number => ({ id: number, name: `Item ${number}` }));

class PaginationDoc extends Component {
  constructor() {
    super();

    this.state = {
      items: []
    };
  }

  onPageChange = pager => this.setState({ items: pager.items });

  render() {
    const componentData = _.find(components, component => component.displayName === 'Pagination');
    const {
      items
    } = this.state;
    const style = {
      paper: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        margin: 0,
        padding: '20px'
      },
      button: { margin: '10px' }
    };
    return (
      <article className="doc">
        <h1>Pagination</h1>
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
            <Pagination list={list} onChange={this.onPageChange}>
              <Table style={style.tabs}>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {_.map(items, listItem => (
                    <TableRow key={listItem.id}>
                      <TableColumn>{listItem.id}</TableColumn>
                      <TableColumn>{listItem.name}</TableColumn>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Pagination>
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

PaginationDoc.defaultProps = {
  setColor: () => {}
};

export default PaginationDoc;
