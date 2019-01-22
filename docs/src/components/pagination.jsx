import React, { Component } from 'react';
import find from 'lodash/find';
import range from 'lodash/range';
import map from 'lodash/map';
import Pagination from '../anchor-ui/pagination';
import Props from './props';
import components from '../components.json';
import Button from '../anchor-ui/button';
import Paper from '../anchor-ui/paper';
import Table from '../anchor-ui/table';
import TableHeader from '../anchor-ui/table-header';
import TableHeaderColumn from '../anchor-ui/table-header-column';
import TableBody from '../anchor-ui/table-body';
import TableRow from '../anchor-ui/table-row';
import TableColumn from '../anchor-ui/table-column';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import Pagination from 'anchor-ui/pagination';
  \`\`\`
`;

const numbers = range(1, 351);
const listDefault = map(numbers, number => ({ id: number, name: `Item ${number}` }));
const listJumpToPage = map(numbers, number => ({ id: number, name: `Item ${number}` }));
const listIntialPage = map(numbers, number => ({ id: number, name: `Item ${number}` }));

const componentData = find(components, { displayName: 'Pagination' });

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

class PaginationDoc extends Component {
  constructor() {
    super();

    this.state = {
      itemsDefault: [],
      itemsJumpToPage: [],
      itemsIntialPage: [],
      jumpToPage: 1
    };
  }

  onPageChange = (event, pager) => this.setState({ itemsDefault: pager.items });

  onInitialPageChange = (event, pager) => this.setState({ itemsIntialPage: pager.items });

  onJumpToPageChange = (event, pager) => {
    this.setState({
      itemsJumpToPage: pager.items,
      jumpToPage: pager.currentPage
    });
  }

  render() {
    const {
      itemsDefault,
      itemsIntialPage,
      itemsJumpToPage,
      jumpToPage
    } = this.state;

    return (
      <article className="page">
        <h1>Pagination</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <Markdown markdown={usage} title="Code example" />
        <section>
          <h1>Default pagination</h1>
          <Paper style={style.paper}>
            <Pagination list={listDefault} onChange={this.onPageChange}>
              <Table style={style.tabs}>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {map(itemsDefault, listItem => (
                    <TableRow key={listItem.id}>
                      <TableColumn>{listItem.id}</TableColumn>
                      <TableColumn>{listItem.name}</TableColumn>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Pagination>
          </Paper>
          <h1>Pagination with jumpToPage</h1>
          <Paper style={style.paper}>
            <Button
              style={style.button}
              onClick={() => {
                this.setState({ jumpToPage: jumpToPage + 1 });
              }}
            >
              <p>Jump to Page {jumpToPage + 1}</p>
            </Button>
            <Pagination
              list={listJumpToPage}
              onChange={this.onJumpToPageChange}
              jumpToPage={jumpToPage}
            >
              <Table style={style.tabs}>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {map(itemsJumpToPage, listItem => (
                    <TableRow key={listItem.id}>
                      <TableColumn>{listItem.id}</TableColumn>
                      <TableColumn>{listItem.name}</TableColumn>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Pagination>
          </Paper>
          <h1>Pagination with initialPage 5</h1>
          <Paper style={style.paper}>
            <Pagination list={listIntialPage} onChange={this.onInitialPageChange} initialPage={5}>
              <Table style={style.tabs}>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {map(itemsIntialPage, listItem => (
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

export default PaginationDoc;
