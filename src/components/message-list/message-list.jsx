import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import shallowEqual from 'recompose/shallowEqual';
import messageListStyleSheet from '../style/message-lists';
import getClassNames from '../internal/get-class-names';

/**
 * Render a list of items (Messages) with optional auto scroll
 */
class MessageList extends Component {
  static propTypes = {
    /**
     * MessageList content
     */
    children: PropTypes.node.isRequired,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        container: PropTypes.string.isRequired,
        list: PropTypes.string.isRequired
      })
    }).isRequired,
    /**
     * The amount of pixels the user has to scroll up to disable auto scroll
     */
    scrollOffset: PropTypes.number,
    /**
     * Expose the components methods to the parent,
     * useful for calling scrollDown from a parent component
     */
    addRef: PropTypes.func,
    /**
     * Override the styles of the root element
     */
    style: PropTypes.instanceOf(Object),
    /**
     * Override the styles of the <ul /> element
     */
    listStyle: PropTypes.instanceOf(Object),
    /**
     * Enable autoScroll
     */
    autoScroll: PropTypes.bool
  }

  static defaultProps = {
    scrollOffset: 100,
    addRef: () => {},
    style: {},
    listStyle: {},
    autoScroll: false
  }

  constructor(props) {
    super(props);

    const { sheet: { classes }, style, listStyle } = props;
    const className = getClassNames(classes, style, 'container', 'MessageList');
    const listClassName = getClassNames(classes, listStyle, 'list', 'MessageList');

    this.state = {
      className,
      listClassName
    };
  }

  componentDidMount() {
    this.props.addRef(this);
  }

  componentWillReceiveProps() {
    const { autoScroll } = this.props;

    if (autoScroll && this.messageList && this.shouldScrollToBottom(this.messageList)) {
      this.scrollDown();
    }
  }

  shouldComponentUpdate(nextProps) {
    return (!shallowEqual(this.props, nextProps));
  }

  componentWillUnmount() {
    this.props.addRef(undefined);
  }

  shouldScrollToBottom(node) {
    const { scrollOffset } = this.props;

    const scrollTop = node && (node.scrollTop || node.scrollTop === 0);
    const offsetHeight = node && (node.offsetHeight || node.offsetHeight === 0);
    const scrollHeight = node && (node.scrollHeight || node.scrollHeight === 0);

    if (node && scrollTop && offsetHeight && scrollHeight) {
      return node.scrollTop + node.offsetHeight + scrollOffset >= node.scrollHeight;
    }

    return false;
  }

  scrollDown() {
    const { autoScroll } = this.props;

    if (!autoScroll) {
      return false;
    }

    return setTimeout(() => {
      if (this.messageList) {
        const node = this.messageList;
        const scrollTop = node && (node.scrollTop || node.scrollTop === 0);
        const offsetHeight = node && (node.offsetHeight || node.offsetHeight === 0);
        const scrollHeight = node && (node.scrollHeight || node.scrollHeight === 0);

        if (scrollTop && offsetHeight && scrollHeight) {
          this.messageList.scrollTop = this.messageList.scrollHeight;
        }
      }
    }, 100);
  }

  render() {
    const { children } = this.props;
    const { className, listClassName } = this.state;

    return (
      <article className={className}>
        <ul
          className={listClassName}
          ref={messageList => (this.messageList = messageList)}
        >
          {children}
        </ul>
      </article>
    );
  }
}

export default injectSheet(messageListStyleSheet)(MessageList);
