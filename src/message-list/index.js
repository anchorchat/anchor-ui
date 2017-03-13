import React, { Component, PropTypes } from 'react';
import {
  ListView,
  View,
} from 'react-native';
import Uranium from 'uranium';
import InvertibleScrollView from 'react-native-invertible-scroll-view';
import shallowEqual from 'recompose/shallowEqual';
import styles from '../style/message-lists';
import Message from '../message';
import combineStyles from '../internal/combine-styles';

/** Render a list of items (Messages) with optional auto scroll */
class MessageList extends Component {
  static displayName = 'MessageList'

  static propTypes = {
    /** MessageList content */
    children: PropTypes.node.isRequired,
    /** The amount of pixels the user has to scroll up to disable auto scroll */
    /** Expose the components methods to the parent,
     * useful for calling scrollDown from a parent component */
    addRef: PropTypes.func,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Override the styles of the <ul /> element */
    listStyle: PropTypes.instanceOf(Object),
    /** Enable autoScroll */
    autoScroll: PropTypes.bool,
    renderMessage: null
  }

  static defaultProps = {
    scrollOffset: 100,
    addRef: () => {},
    style: {},
    renderMessage: null,
    listStyle: {},
    autoScroll: false
  }

  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
    this.renderScrollComponent = this.renderScrollComponent.bind(this);
  }

  componentDidMount() {
    this.props.addRef(this);
  }

  componentWillReceiveProps() {
    const { autoScroll } = this.props;

    if (autoScroll && this.messageList && this.shouldScrollToBottom(this.messageList)) {
      this.scrollTo();
    }
  }

  shouldComponentUpdate(nextProps) {
    return (!shallowEqual(this.props, nextProps));
  }

  componentWillUnmount() {
    this.props.addRef(undefined);
  }

  scrollTo(options) {
    this._invertibleScrollViewRef.scrollTo(options);
  }


  renderScrollComponent(props) {
    return (
      <InvertibleScrollView
        {...props}
        ref={component => this._invertibleScrollViewRef = component}
      />
    );
  }

  renderRow(message, sectionId, rowId) {
    const messageProps = {
      ...this.props,
      key: message._id,
      currentMessage: message,
      previousMessage: message.previousMessage,
      nextMessage: message.nextMessage,
      position: message.user._id === this.props.user._id ? 'right' : 'left',
    };

    if (this.props.renderMessage) {
      return this.props.renderMessage(messageProps);
    }
    return <Message {...messageProps} />;
  }


  render() {
    const { children, style, listStyle } = this.props;

    return (
      <View style={combineStyles(styles.container, style, { flex: 1 })}>
        <ListView
          style={combineStyles(styles.list, listStyle)}
          ref={messageList => (this.messageList = messageList)}
          enableEmptySections
          keyboardShouldPersistTaps
          automaticallyAdjustContentInsets={false}
          initialListSize={20}
          pageSize={20}
          renderRow={this.renderRow}
          renderHeader={this.renderFooter}
          renderScrollComponent={this.renderScrollComponent}
        />
      </View>
    );
  }
}

export default Uranium(MessageList);
