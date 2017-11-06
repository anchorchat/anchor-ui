export default `
  \`\`\`jsx
  import React, { Component } from 'react';
  import Menu from 'anchor-ui/menu';
  import IconRocket from 'anchor-ui/icons/icon-rocket';

  class MyComponent extends Component {
    state = {
      open: false,
      active: ''
    };

    toggleMenu() {
      this.setState({
        open: !this.state.open
      });
    }

    handleOnClick(location) {
      // Assuming you use react-router
      history.push(location);

      this.setState({
        active: location
      });
    }

    render() {
      const { open, active } = this.state;

      return (
        <section>
          <Menu
            closeMenu={this.toggleMenu}
            header="Menu"
            open={open}
            headerIcon={<IconRocket />}
            footer="version 8af2fbb"
          >
            <MenuItem
              text="Home"
              onClick={() => this.handleOnClick('/')}
              active={active === '/'}
            />
            <MenuItem
              text="Docs"
              onClick={() => this.handleOnClick('/docs')}
              active={active === '/docs'}
            />
            <MenuItem
              text="Dashboard"
              onClick={() => this.handleOnClick('/dashboard')}
              active={active === '/dashboard'}
            />
          </Menu>
        </section>
      );
    }
  }
  \`\`\`
`;
