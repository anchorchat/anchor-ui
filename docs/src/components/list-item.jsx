import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import ListItem from '../../../dist/list-item';
import List from '../../../dist/list';
import Button from '../../../dist/button';
import { IconClose } from '../../../dist/icons';
import Badge from '../../../dist/badge';
import components from '../../components.json';
import Props from './props';
import Paper from '../../../dist/paper';

const usage = '```js\n import ListItem from \'anchor-ui/list-item\';';

function ListItemDoc() {
  const componentData = _.find(components, component => component.displayName === 'ListItem');
  const styleItem = { margin: '10px' };
  const styleNestedList = { margin: '10px 10px 0 10px' };
  const styleNestedItem = { margin: '0 10px 0 10px' };

  return (
    <article className="doc">
      <h1>ListItem</h1>
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
        <Paper style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', margin: 0, padding: '20px' }}>
          <List>
            <ListItem
              primaryText="Default item"
              secondaryText="Secondary text"
              style={styleItem}
            />
            <ListItem
              primaryText="Active item"
              secondaryText="Secondary text"
              style={styleItem}
              active
            />
            <ListItem
              primaryText="With avatar"
              secondaryText="10/50"
              avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
              style={styleItem}
            />
            <ListItem
              primaryText="With rightButton"
              secondaryText="10/50"
              avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
              style={styleItem}
              rightButton={
                <Button iconButton onClick={() => {}}>
                  <IconClose />
                </Button>
              }
            />
            <ListItem
              primaryText="With badge"
              secondaryText="10/50"
              avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
              style={styleItem}
              badge={<Badge value={4} maxValue={9} />}
            />
            <ListItem
              primaryText="Muted"
              secondaryText="10/50"
              avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
              style={styleItem}
              muted
            />
            <ListItem
              primaryText="Blocked"
              secondaryText="10/50"
              avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
              style={styleItem}
              blocked
            />
            <ListItem
              primaryText="Nested list"
              secondaryText="Default open"
              avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
              style={styleNestedList}
              open
            >
              <ListItem
                primaryText="Item"
                secondaryText="10/50"
                avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
                style={styleNestedItem}
              />
              <ListItem
                primaryText="Item"
                secondaryText="10/50"
                avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
                style={styleNestedItem}
              />
            </ListItem>
            <ListItem
              primaryText="Nested list"
              secondaryText="Default closed"
              avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
              style={styleNestedList}
            >
              <ListItem
                primaryText="Item"
                secondaryText="10/50"
                avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
                style={styleNestedItem}
              />
              <ListItem
                primaryText="Item"
                secondaryText="10/50"
                avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
                style={styleNestedItem}
              />
            </ListItem>
          </List>
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default ListItemDoc;
