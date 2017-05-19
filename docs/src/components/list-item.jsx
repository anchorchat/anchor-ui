import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import ListItem from '../../../dist/list-item';
import List from '../../../dist/list';
import Button from '../../../dist/button';
import { IconClose } from '../../../dist/icons';
import Badge from '../../../dist/badge';
import AdminBadge from '../../../dist/admin-badge';
import components from '../../components.json';
import Props from './props';
import Paper from '../../../dist/paper';

const usage = '```js\n import ListItem from \'anchor-ui/list-item\';';

const ListItemDoc = () => {
  const componentData = _.find(components, component => component.displayName === 'ListItem');
  const style = {
    paper: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: 0,
      padding: '20px'
    },
    item: { margin: '10px' },
    itemNested: { margin: '0 10px 0 10px' },
    list: { margin: '10px 10px 0 10px' }
  };

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
        <Paper style={style.paper}>
          <List>
            <ListItem
              primaryText="Default item"
              secondaryText="Secondary text"
              style={style.item}
            />
            <ListItem
              primaryText="Active item"
              secondaryText="Secondary text"
              style={style.item}
              active
            />
            <ListItem
              primaryText="With avatar"
              secondaryText="10/50"
              avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
              style={style.item}
            />
            <ListItem
              primaryText="With rightButton"
              secondaryText="10/50"
              avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
              style={style.item}
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
              style={style.item}
              badge={<Badge value={4} maxValue={9} />}
            />
            <ListItem
              primaryText="Muted"
              secondaryText="10/50"
              avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
              style={style.item}
              muted
            />
            <ListItem
              primaryText="Blocked"
              secondaryText="10/50"
              avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
              style={style.item}
              blocked
            />
            <ListItem
              primaryText="Nested list"
              secondaryText="Default open"
              avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
              style={style.list}
              open
            >
              <ListItem
                primaryText="Item"
                secondaryText="10/50"
                avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
                style={style.itemNested}
              />
              <ListItem
                primaryText="Item"
                secondaryText="10/50"
                avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
                style={style.itemNested}
              />
            </ListItem>
            <ListItem
              primaryText="Nested list"
              secondaryText="Default closed"
              avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
              style={style.list}
            >
              <ListItem
                primaryText="Item"
                secondaryText="10/50"
                avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
                style={style.itemNested}
              />
              <ListItem
                primaryText="Item"
                secondaryText="10/50"
                avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
                style={style.itemNested}
              />
            </ListItem>
            <ListItem
              primaryText="With textBadge"
              secondaryText="Male"
              textBadge={<span><AdminBadge /> <AdminBadge inverted text="Custom" /></span>}
              avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
              style={style.item}
            />
          </List>
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
};

export default ListItemDoc;
