import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import emojione from 'emojione';
import EmojiMenu from '../../../dist/emoji-menu';
import Button from '../../../dist/button';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import EmojiMenu from \'anchor-ui/emoji-menu\';';

class EmojiMenuDoc extends Component {
  static createMarkup = text => ({
    __html: emojione.toImage(text)
  })

  constructor() {
    super();

    this.state = {
      open: false,
      emoji: ''
    };
  }

  toggleMenu = () => this.setState({ open: !this.state.open })

  sendEmoji = ({ shortname }) => this.setState({ emoji: shortname })

  render() {
    const componentData = _.find(components, component => component.displayName === 'EmojiMenu');
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

    return (
      <article className="doc">
        <h1>EmojiMenu</h1>
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
            {
              this.state.emoji
              ? <span style={style.emojiMenu} className="emojione" dangerouslySetInnerHTML={EmojiMenuDoc.createMarkup(this.state.emoji)} />
              : null
            }
            <EmojiMenu
              sendEmoji={this.sendEmoji}
              style={style.emojiMenu}
              open={this.state.open}
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
