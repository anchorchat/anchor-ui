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
import IconMenu from '../../../dist/icon-menu';
import MenuItem from '../../../dist/menu-item';
import IconRocket from '../../../dist/icons/icon-rocket';

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
    list: {
      width: '250px'
    }
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
          <List style={style.list}>
            <ListItem
              primaryText="Default item"
            />
            <ListItem
              primaryText="Default item"
              secondaryText="Secondary text"
            />
            <ListItem
              primaryText="Default item with some very very long text"
              secondaryText="Very very very long Secondary text"
              rightButton={
                <Button iconButton onClick={() => {}}>
                  <IconClose />
                </Button>
              }
              avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
            />
            <ListItem
              primaryText="Active item"
              secondaryText="Secondary text"
              active
            />
            <ListItem
              primaryText="With avatar"
              secondaryText="10/50"
              avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
            />
            <ListItem
              primaryText="With rightButton"
              secondaryText="10/50"
              rightButton={
                <Button iconButton onClick={() => {}}>
                  <IconClose />
                </Button>
              }
            />
            <ListItem
              primaryText="With IconMenu"
              secondaryText="10/50"
              avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
              rightButton={
                <IconMenu
                  style={style.iconMenu}
                  icon={<IconRocket />}
                  header="Items"
                  headerStyle={style.headerStyle}
                  secondaryMenuItems={[<MenuItem icon={<IconRocket />} text="An item" onClick={() => {}} />, <MenuItem text="Another item" onClick={() => {}} />]}
                  dividerText="More items"
                >
                  <MenuItem text="Active item" onClick={() => {}} active />
                  <MenuItem text="Inactive item" onClick={() => {}} />
                </IconMenu>
              }
            />
            <ListItem
              primaryText="With badge"
              secondaryText="10/50"
              avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
              badge={<Badge value={4} maxValue={9} />}
            />
            <ListItem
              primaryText="Muted"
              secondaryText="10/50"
              avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
              muted
            />
            <ListItem
              primaryText="Blocked"
              secondaryText="10/50"
              avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
              blocked
            />
            <ListItem
              primaryText="Nested list"
              secondaryText="Default open"
              avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
              open
            >
              <ListItem
                primaryText="Item"
                secondaryText="10/50"
                avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
              />
              <ListItem
                primaryText="Item"
                secondaryText="10/50"
                avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
              />
            </ListItem>
            <ListItem
              primaryText="Nested list"
              secondaryText="Default closed"
              avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
            >
              <ListItem
                primaryText="Item"
                secondaryText="10/50"
                avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
              />
              <ListItem
                primaryText="Item"
                secondaryText="10/50"
                avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
              />
            </ListItem>
            <ListItem
              primaryText="With textBadge"
              secondaryText="Male"
              textBadge={<span><AdminBadge /> <AdminBadge inverted text="Custom" /></span>}
              avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
            />
          </List>
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
};

export default ListItemDoc;
