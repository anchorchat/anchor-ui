import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import AppHeader from '../anchor-ui/app-header';
import Button from '../anchor-ui/button';
import Nav from './nav';
import logo from '../assets/images/logo.svg';
import github from '../assets/images/github.svg';
import ThemeProvider from '../anchor-ui/theme-provider';
import colors from '../anchor-ui/settings/colors';
import Media from '../anchor-ui/media';
import IconMenu from '../anchor-ui/icons/icon-menu';

class App extends Component {
  constructor() {
    super();

    this.state = {
      color: colors.theme,
      media: {
        medium: false
      },
      menu: false
    };
  }

  setColor = color => this.setState({ color })

  setMedia = (matches) => {
    this.setState({
      media: matches
    });
  }

  toggleMenu = () => {
    const { menu } = this.state;

    this.setState({
      menu: !menu
    });
  }

  render() {
    const { children } = this.props;
    const { media, menu, color } = this.state;

    const childrenWithProps = (
      React.Children.map(children, child => (
        React.cloneElement(child, { setColor: this.setColor })
      ))
    );

    const query = {
      medium: '(min-width: 768px)'
    };

    const leftButton = (
      <Button iconButton onClick={this.toggleMenu}>
        <IconMenu color="#FEFEFE" />
      </Button>
    );

    return (
      <ThemeProvider color={color}>
        <main>
          <AppHeader
            text="Anchor UI"
            icon={(
              <a
                href="https://anchor.chat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={logo} alt="Anchor Chat" />
              </a>
            )}
            leftButton={
              !media.medium
                ? leftButton
                : null
            }
            rightButton={(
              <a
                href="https://github.com/anchorchat/anchor-ui"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button onClick={noop} iconButton>
                  <img className="github" src={github} alt="Github" />
                </Button>
              </a>
            )}
          />
          <article className="docs">
            <Nav media={media} open={menu} toggleMenu={this.toggleMenu} />
            {childrenWithProps}
          </article>
          <Media query={query} onChange={this.setMedia} />
        </main>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
