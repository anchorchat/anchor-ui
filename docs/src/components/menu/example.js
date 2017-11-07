export default `
  \`\`\`jsx
  import React, { Component } from 'react';
  import Menu from 'anchor-ui/menu';
  import IconRocket from 'anchor-ui/icons/icon-rocket';

  class MyComponent extends Component {
    state = {
      open: false,
      activeRoute: ''
    };

    toggleMenu() {
      this.setState({
        open: !this.state.open
      });
    }

    handleClick(location) {
      this.setState({
        activeRoute: location
      });
    }

    render() {
      const { open, activeRoute } = this.state;

      return (
        <section>
          <Menu
            closeMenu={this.toggleMenu}
            header="Menu"
            open={open}
            headerIcon={<IconRocket />}
            footer="Footer"
          >
            <MenuItem
              text="Home"
              onClick={() => this.handleClick('/')}
              active={activeRoute === '/'}
            />
            <MenuItem
              text="Docs"
              onClick={() => this.handleClick('/docs')}
              active={activeRoute === '/docs'}
            />
            <MenuItem
              text="Dashboard"
              onClick={() => this.handleClick('/dashboard')}
              active={activeRoute === '/dashboard'}
            />
          </Menu>
        </section>
      );
    }
  }
  \`\`\`
`;
