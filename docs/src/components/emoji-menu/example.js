export default `
  \`\`\`jsx
  import React, { Component } from 'react';
  import EmojiMenu from 'anchor-ui/emoji-menu';
  import Button from 'anchor-ui/button';
  import emojione from 'emojione';

  const createMarkup = text => ({
    __html: emojione.toImage(text)
  });

  class EmojiMenuExample extends Component {
    state = {
      open: false,
      emoji: ''
    }

    toggleMenu = () => this.setState({ open: !this.state.open })

    sendEmoji = ({ shortname }) => this.setState({ emoji: shortname })

    render() {
      const { open, emoji } = this.state;

      return (
        <section>
          {
            emoji
            ? <span style={style.emojiMenu} className="emojione" dangerouslySetInnerHTML={createMarkup(emoji)} />
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
        </section>
      );
    }
  }

  export default EmojiMenuExample;
  \`\`\`
`;
