import React from 'react';
import Table from '../../../../dist/table';
import TableHeader from '../../../../dist/table-header';
import TableHeaderColumn from '../../../../dist/table-header-column';
import TableBody from '../../../../dist/table-body';
import TableRow from '../../../../dist/table-row';
import TableColumn from '../../../../dist/table-column';
import Markdown from '../markdown';

const usage = `
  \`\`\`js
  import focusManager from 'anchor-ui/focus-manager';
  import MyComponent from './my-component';

  export default focusManager()(MyComponent);

  // with custom events
  import focusManager from 'anchor-ui/focus-manager';
  import MyComponent from './my-component';

  export default focusManager(['onFocus', 'onBlur'])(MyComponent);

  // with custom style
  import focusManager from 'anchor-ui/focus-manager';
  import MyComponent from './my-component';

  const options = {
    style: {
      width: '100%',
      height: '100%'
    }
  };

  export default focusManager([], options)(MyComponent);
  \`\`\`
`;

const focusManagerDoc = () => (
  <article className="page">
    <h1>focusManager</h1>
    <section>
      <h1>Description</h1>
      <p>
        A higher order component which checks if the wrapped component is currently focused.
      </p>
      <p>
        By default it listens to &apos;onFocus&apos;, &apos;onBlur&apos;, &apos;onClick&apos;,
         &apos;onMouseEnter&apos;, &apos;onMouseLeave&apos;, &apos;onMouseOut&apos;
         and &apos;onMouseOver&apos; events.
      </p>
      <p>
        You can change this by passing an array of events to the factory function.
      </p>
    </section>
    <section>
      <Markdown markdown={usage} title="Code examples" />
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
            <TableColumn>events</TableColumn>
            <TableColumn>Array</TableColumn>
            <TableColumn>Events to listen for</TableColumn>
            <TableColumn>[]</TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>options</TableColumn>
            <TableColumn>Object</TableColumn>
            <TableColumn>Additional options</TableColumn>
            <TableColumn>{'{}'}</TableColumn>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  </article>
);

export default focusManagerDoc;
