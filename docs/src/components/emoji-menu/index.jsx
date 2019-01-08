import React, { Component } from 'react';
import find from 'lodash/find';
import emojione from 'emojione';
import EmojiMenu from '../../anchor-ui/emoji-menu';
import Button from '../../anchor-ui/button';
import Props from '../props';
import components from '../../components.json';
import Paper from '../../anchor-ui/paper';
import Markdown from '../markdown';
import example from './example';

const createMarkup = text => ({
  __html: emojione.toImage(text)
});

const componentData = find(components, { displayName: 'EmojiMenu' });
const style = {
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 0,
    padding: '20px'
  },
  emojiMenu: { margin: '10px' }
};

class EmojiMenuDoc extends Component {
  state = {
    open: false,
    emoji: ''
  }

  toggleMenu = () => {
    const { open } = this.state;

    this.setState({
      open: !open
    });
  }

  sendEmoji = ({ shortname }) => this.setState({ emoji: shortname })

  render() {
    const { emoji, open } = this.state;

    return (
      <article className="page">
        <h1>EmojiMenu</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <section>
          <a
            href="https://www.emojione.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            This component uses free Emoji icons supplied by EmojiOne
          </a>
        </section>
        <section>
          <h1>Examples</h1>
          <Markdown markdown={example} title="Code example" />
          <Paper style={style.paper}>
            {
              emoji
                ? (
                  <span
                    style={style.emojiMenu}
                    className="emojione"
                    dangerouslySetInnerHTML={createMarkup(emoji)}
                  />
                )
                : null
            }
            <EmojiMenu
              sendEmoji={this.sendEmoji}
              style={style.emojiMenu}
              open={open}
              hideMenu={this.toggleMenu}
            />
            <Button style={style.emojiMenu} onClick={this.toggleMenu}>
              Toggle EmojiMenu
            </Button>
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default EmojiMenuDoc;
