import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import getStyles from './get-styles';

const propTypes = {
    /** MessageList content */
    children: PropTypes.node.isRequired,
    /** The amount of pixels the user has to scroll up to disable auto scroll */
    scrollOffset: PropTypes.number,
    /** Reference list element */
    listRef: PropTypes.func,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Override the styles of the ul element */
    listStyle: PropTypes.instanceOf(Object),
    /** Enable autoScroll */
    autoScroll: PropTypes.bool
};

const defaultProps = {
  scrollOffset: 100,
  listRef: () => {},
  style: {},
  listStyle: {},
  autoScroll: false
};

const displayName = 'MessageList';

/** Render a list of items (Messages) with optional auto scroll */
class MessageList extends Component {
  componentWillReceiveProps(nextProps) {
    const { autoScroll } = this.props;

    if (autoScroll) {
      this.shouldScroll = this.shouldScrollTo(this.messageList);
    }
  }

  componentDidUpdate() {
    const { autoScroll } = this.props;

    if (autoScroll && this.shouldScroll) {
      this.scrollToBottom();

      this.shouldScroll = false;
    }
  }

  shouldScrollTo = ({ scrollHeight, scrollTop, offsetHeight }) => {
    const { scrollOffset } = this.props;

    const position = scrollHeight - (scrollTop + offsetHeight);

    return position < scrollOffset;
  }

  scrollToBottom = () => {
    const { scrollHeight } = this.messageList;

    this.messageList.scrollTop = scrollHeight;
  }

  setRef = (node) => {
    const { listRef } = this.props;

    this.messageList = node;

    listRef(node);
  }

  render() {
    const {
      children,
      style,
      listStyle,
      listRef,
      scrollOffset,
      autoScroll,
      ...custom
    } = this.props;

    return (
      <article style={getStyles.root(style)} {...custom}>
        <ul style={getStyles.list(listStyle)} ref={this.setRef}>
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
