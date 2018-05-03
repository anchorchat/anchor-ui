export default `
  \`\`\`jsx
  import React, { Component } from 'react';
  import Pagination from 'anchor-ui/pagination';
  import Table from 'anchor-ui/table';
  import TableHeader from 'anchor-ui/table-header';
  import TableHeaderColumn from 'anchor-ui/table-header-column';
  import TableBody from 'anchor-ui/table-body';
  import TableRow from 'anchor-ui/table-row';
  import range from 'lodash/range';
  import map from 'lodash/map';

  const list = map(range(1, 101), number => ({ id: number, name: \`Item \${number}\` }));

  class MyComponent extends Component {
    state = {
      items: []
    }

    handlePageChange = (event, pager) => this.setState({ item: pager.items })

    render() {
      const { items } = this.state;

      return (
        <section>
          <Pagination list={list} onChange={this.handlePageChange}>
            <Table>
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
        </section>
      );
    }
  }
  \`\`\`
`;
