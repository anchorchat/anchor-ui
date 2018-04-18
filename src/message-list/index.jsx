import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import getStyles from './get-styles';

const propTypes = {
  /** MessageList content */
  children: PropTypes.node.isRequired,
  /** The amount of pixels the user has to scroll up to disable auto scroll */
  scrollOffset: PropTypes.number,
  /** Override the styles of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the ul element */
  listStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Enable autoScroll */
  autoScroll: PropTypes.bool
};

const defaultProps = {
  scrollOffset: 100,
  style: {},
  listStyle: {},
  autoScroll: false
};

const displayName = 'MessageList';

/** Render a list of items (Messages) with optional auto scroll */
class MessageList extends Component {
  constructor() {
    super();

    this.listRef = createRef();
  }

  componentWillReceiveProps() {
    const { autoScroll } = this.props;

    if (autoScroll) {
      this.shouldScroll = this.shouldScrollToBottom(this.list.current);
    }
  }

  componentDidUpdate() {
    const { autoScroll } = this.props;

    if (autoScroll && this.shouldScroll) {
      this.scrollToBottom();

      this.shouldScroll = false;
    }
  }

  scrollToBottom = () => {
    const list = this.listRef.current;

    list.scrollTop = list.scrollHeight;
  }

  shouldScrollToBottom = ({ scrollHeight, scrollTop, offsetHeight }) => {
    const { scrollOffset } = this.props;

    const position = scrollHeight - (scrollTop + offsetHeight);

    return position < scrollOffset;
  }

  render() {
    const {
      children,
      style,
      listStyle,
      scrollOffset,
      autoScroll,
      ...custom
    } = this.props;

    return (
      <article style={getStyles.root(style)} {...custom}>
        <ul style={getStyles.list(listStyle)} ref={this.list}>
          {children}
        </ul>
      </article>
    );
  }
}

MessageList.propTypes = propTypes;
MessageList.defaultProps = defaultProps;
MessageList.displayName = displayName;

export default Radium(MessageList);
