import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Pagination from '../../../dist/pagination';
import Props from './props';
import components from '../../components.json';
import Button from '../../../dist/button';
import Paper from '../../../dist/paper';
import Table from '../../../dist/table';
import TableHeader from '../../../dist/table-header';
import TableHeaderColumn from '../../../dist/table-header-column';
import TableBody from '../../../dist/table-body';
import TableRow from '../../../dist/table-row';
import TableColumn from '../../../dist/table-column';

const usage = '```js\n import Pagination from \'anchor-ui/pagination\';';

const range = _.range(1, 351);
const listDefault = _.map(range, number => ({ id: number, name: `Item ${number}` }));
const listJumpToPage = _.map(range, number => ({ id: number, name: `Item ${number}` }));
const listIntialPage = _.map(range, number => ({ id: number, name: `Item ${number}` }));

class PaginationDoc extends Component {
  constructor() {
    super();

    this.state = {
      itemsDefault: [],
      itemsJumpToPage: [],
      itemsIntialPage: [],
      jumpToPage: 1
    };

    this.onPageChange = this.onPageChange.bind(this);
    this.onInitialPageChange = this.onInitialPageChange.bind(this);
    this.onJumpToPageChange = this.onJumpToPageChange.bind(this);
  }

  onPageChange = pager => this.setState({ itemsDefault: pager.items });

  onInitialPageChange = pager => this.setState({ itemsIntialPage: pager.items });

  onJumpToPageChange = (pager) => {
    this.setState({
      itemsJumpToPage: pager.items,
      jumpToPage: pager.currentPage
    });
  }

  render() {
    const componentData = _.find(components, component => component.displayName === 'Pagination');
    const {
      itemsDefault,
      itemsIntialPage,
      itemsJumpToPage
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
                  {_.map(itemsDefault, listItem => (
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
                this.setState({ jumpToPage: this.state.jumpToPage + 1 });
              }}
            >
              <p>Jump to Page {this.state.jumpToPage + 1}</p>
            </Button>
            <Pagination
              list={listJumpToPage}
              onChange={this.onJumpToPageChange}
              jumpToPage={this.state.jumpToPage}
            >
              <Table style={style.tabs}>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {_.map(itemsJumpToPage, listItem => (
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
                  {_.map(itemsIntialPage, listItem => (
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
