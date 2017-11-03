import React, { Component } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import prism from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-jsx';
import Button from '../../../dist/button';
import IconChevronDown from '../../../dist/icons/icon-chevron-down';

const propTypes = {
  title: PropTypes.string.isRequired,
  markdown: PropTypes.string.isRequired
};

marked.setOptions({
  highlight(code, language) {
    return prism.highlight(code, prism.languages[language]);
  }
});

class Markdown extends Component {
  constructor() {
    super();

    this.state = {
      open: false
    };
  }

  toggleOpen = () => {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { open } = this.state;
    const { markdown, title } = this.props;

    const style = {
      container: {
        margin: '16px 0'
      },
      header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '9px',
        background: '#f6f6f6',
        borderRadius: '4px',
        cursor: 'pointer'
      },
      heading: {
        margin: '0'
      },
      markdown: {
        overflow: 'hidden',
        height: '0'
      },
      markdownOpen: {
        height: 'auto'
      },
      icon: {
        transform: 'rotate(0)',
        transition: 'transform .3s ease-in-out'
      },
      iconOpen: {
        transform: 'rotate(180deg)',
        transition: 'transform .3s ease-in-out'
      }
    };

    return (
      <section style={style.container}>
        <header style={style.header} onClick={this.toggleOpen}>
          <p style={style.heading}>{title}</p>
          <Button iconButton>
            <IconChevronDown style={open ? style.iconOpen : style.icon} />
          </Button>
        </header>
        <div
          style={open ? style.markdownOpen : style.markdown}
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </section>
    );
  }
}

Markdown.propTypes = propTypes;

export default Markdown;
