import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import * as icons from '../../../dist/icons';
import Paper from '../../../dist/paper';
import Table from '../../../dist/table';
import TableHeader from '../../../dist/table-header';
import TableHeaderColumn from '../../../dist/table-header-column';
import TableBody from '../../../dist/table-body';
import TableRow from '../../../dist/table-row';
import TableColumn from '../../../dist/table-column';

const usage = '```js\n import { IconEmoji } from \'anchor-ui/icons\'; \n import IconHammer from \'anchor-ui/icons/icon-hammer\'';

const IconsDoc = () => {
  const style = {
    paper: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: 0,
      padding: '20px',
      justifyContent: 'space-between'
    },
    wrapper: {
      margin: '15px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    icon: {
      width: '44px',
      height: '44px'
    },
    label: {
      marginTop: '16px',
      fontSize: '12px'
    }
  };

  return (
    <article className="doc">
      <h1>Icons</h1>
      <section>
        <h1>Description</h1>
        <p>SVG Icons</p>
      </section>
      <section>
        <h1>Usage</h1>
        <ReactMarkdown source={usage} className="markdown" />
      </section>
      <section>
        <h1>Examples</h1>
        <Paper style={style.paper}>
          {_.map(icons, (icon, name) => (
            <div key={name} style={style.wrapper}>
              {React.createElement(icon, { style: style.icon })}
              <span style={style.label}>{name}</span>
            </div>
          ))}
        </Paper>
      </section>
      <section>
        <h1>Props</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Type</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
              <TableHeaderColumn>Default value</TableHeaderColumn>
              <TableHeaderColumn>Required</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableColumn>color</TableColumn>
              <TableColumn>string</TableColumn>
              <TableColumn>The icon&apos;s color</TableColumn>
              <TableColumn>#C4C4C4</TableColumn>
              <TableColumn>No</TableColumn>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </article>
  );
};

export default IconsDoc;
