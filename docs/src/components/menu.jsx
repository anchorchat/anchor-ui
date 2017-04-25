import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Menu from '../../../dist/menu';
import MenuItem from '../../../dist/menu-item';
import Button from '../../../dist/button';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Menu from \'anchor-ui/menu\';';

class MenuDoc extends Component {
  constructor() {
    super();

    this.state = {
      open: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { open } = this.state;
    const componentData = _.find(components, component => component.displayName === 'Menu');

    return (
      <article className="doc">
        <h1>Menu</h1>
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
          <Paper style={{ margin: 0, padding: '20px' }}>
            <Button onClick={this.toggleMenu}>Open Menu</Button>
            <Menu
              toggleMenu={this.toggleMenu}
              header="Menu"
              open={open}
              style={{ zIndex: '1' }}
            >
              <MenuItem text="Active Menu item" onClick={() => {}} active />
              <MenuItem text="Menu item" onClick={() => {}} />
              <MenuItem text="Menu item" onClick={() => {}} />
            </Menu>
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default MenuDoc;
