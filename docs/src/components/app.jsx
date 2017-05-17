import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppHeader from '../../../dist/app-header';
import Button from '../../../dist/button';
import Nav from './nav';
import logo from '../assets/images/logo.svg';
import github from '../assets/images/github.svg';
import ThemeProvider from '../../../dist/theme-provider';
import colors from '../../../dist/settings/colors';

class App extends Component {
  constructor() {
    super();

    this.state = {
      color: colors.theme
    };
  }

  setColor = color => this.setState({ color })

  render() {
    const { children } = this.props;

    const childrenWithProps = React.Children.map(
      children, child => React.cloneElement(
        child,
        {
          setColor: this.setColor
        }
      )
    );

    return (
      <ThemeProvider color={this.state.color}>
        <main className="app">
          <AppHeader
            text="Anchor UI"
            icon={
              <a
                href="https://anchor.chat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={logo} alt="Anchor Chat" />
              </a>
            }
            rightButton={
              <Button onClick={this.setColor} iconButton>
                <img className="github" src={github} alt="Github" />
              </Button>
            }
          />
          <article className="doc">
            <Nav />
            {childrenWithProps}
          </article>
        </main>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
