import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Menu from '../../../dist/menu';
import MenuItem from '../../../dist/menu-item';
import Button from '../../../dist/button';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';
import IconRocket from '../../../dist/icons/icon-rocket';

const usage = '```js\n import Menu from \'anchor-ui/menu\';';

class MenuDoc extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
      openIconHeader: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleMenuIconHeader = this.toggleMenuIconHeader.bind(this);
  }

  toggleMenu() {
    this.setState({
      open: !this.state.open
    });
  }

  toggleMenuIconHeader() {
    this.setState({
      openIconHeader: !this.state.openIconHeader
    });
  }

  render() {
    const { open, openIconHeader } = this.state;
    const componentData = _.find(components, component => component.displayName === 'Menu');
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
          <Paper style={style.paper}>
            <Menu style={{ height: 'auto', display: 'inline-block' }} toggleMenu={() => {}} header="Sidebar menu" sidebar>
              <MenuItem text="Active Menu item" onClick={() => {}} active />
              <MenuItem text="Menu item" onClick={() => {}} />
              <MenuItem text="Menu item" onClick={() => {}} />
            </Menu>
            <Button
              style={style.button}
              onClick={this.toggleMenu}
            >
              Default Menu
            </Button>
            <Button
              style={style.button}
              onClick={this.toggleMenuIconHeader}
            >
              Menu with iconHeader
            </Button>
            <Menu
              toggleMenu={this.toggleMenu}
              header="Default Menu"
              open={open}
            >
              <MenuItem text="Active Menu item" onClick={() => {}} active />
              <MenuItem text="Menu item" onClick={() => {}} />
              <MenuItem text="Menu item" onClick={() => {}} />
            </Menu>
            <Menu
              toggleMenu={this.toggleMenuIconHeader}
              header="IconHeader Menu"
              open={openIconHeader}
              headerIcon={<IconRocket />}
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
