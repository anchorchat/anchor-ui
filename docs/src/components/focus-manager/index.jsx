import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../../../dist/table';
import TableHeader from '../../../../dist/table-header';
import TableHeaderColumn from '../../../../dist/table-header-column';
import TableBody from '../../../../dist/table-body';
import TableRow from '../../../../dist/table-row';
import TableColumn from '../../../../dist/table-column';
import Paper from '../../../../dist/paper';
import focusManager from '../../../../dist/focus-manager';
import Markdown from '../markdown';
import example from './example';

const FocusedComponent = ({ focused }) => {
  const style = {
    width: '100px',
    height: '100px',
    color: focused ? 'white' : 'black',
    backgroundColor: focused ? 'blue' : 'yellow'
  };

  return (
    <div style={style}>
      {
        focused
          ? 'focused'
          : 'not focused'
      }
    </div>
  );
};

FocusedComponent.propTypes = {
  focused: PropTypes.bool.isRequired
};

const FocusedDefault = focusManager()(FocusedComponent);

const FocusedClick = focusManager(['onClick', 'onMouseOut'])(FocusedComponent);

const FocusedMouse = focusManager(['onMouseOver', 'onMouseOut'])(FocusedComponent);

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
      <h1>Examples</h1>
      <Markdown markdown={example} title="Code examples" />
      <Paper style={{ margin: 0, padding: '16px', display: 'flex' }}>
        <div style={{ padding: '10px' }}>
          <p>Default</p>
          <div style={{ width: '100px', height: '100px' }}>
            <FocusedDefault />
          </div>
        </div>
        <div style={{ padding: '10px' }}>
          <p>Focus on click</p>
          <div style={{ width: '100px', height: '100px' }}>
            <FocusedClick />
          </div>
        </div>
        <div style={{ padding: '10px' }}>
          <p>Focus on mouse over</p>
          <div style={{ width: '100px', height: '100px' }}>
            <FocusedMouse />
          </div>
        </div>
      </Paper>
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
            <TableColumn>Array&lt;string&gt;</TableColumn>
            <TableColumn>
              <p>Focus events: </p>
              <p>&apos;onClick&apos;</p>
              <p>&apos;onFocus&apos;</p>
              <p>&apos;onMouseEnter&apos;</p>
              <p>&apos;onMouseOver&apos;</p>
              <br />
              <p>Unfocus events: </p>
              <p>&apos;onBlur&apos;</p>
              <p>&apos;onMouseLeave&apos;</p>
              <p>&apos;onMouseOut&apos;</p>
            </TableColumn>
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
