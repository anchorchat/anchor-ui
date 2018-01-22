import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isArray from 'lodash/isArray';
import { AutoSizer, List as VirtualizedList } from 'react-virtualized';
import getStyles from './get-styles';
import styles from './styles';

const displayName = 'List';

const propTypes = {
  /** ListItems to render */
  children: PropTypes.node.isRequired,
  /** Optional header text */
  header: PropTypes.node,
  /** Override the styles of the header element */
  headerStyle: PropTypes.instanceOf(Object),
  /** Reference list element */
  listRef: PropTypes.func,
  /** Enable virtualized list from 'react-virtualized'.
   * List will only render items that are in view
   */
  enableInfiniteScroll: PropTypes.bool,
  /**
   * Specify the height of each item in the list.
   * Only works if enableInfiniteScroll is set to true.
   */
  itemHeight: PropTypes.number,
  /**
   * Override the styles of the list element. Height needs to be set for inifite scroll to work.
   */
  listStyle: PropTypes.instanceOf(Object),
  /**
   * Specify amount of items to render outside the view.
   * Only works if enableInfiniteScroll is set to true.
   * Defaults to 10, increasing the amount can cause massive performance loss.
   */
  overscanRowCount: PropTypes.number,
  /**
   * Optional scrolling placeholder
   * Only works if enableInfiniteScroll is set to true.
   *
   * - Single component used on every child
   *
   * - Array of components, equal to children, index rendered based on position (placeholder[index])
   */
  scrollPlaceholder: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  /** Scroll to a specific index */
  scrollToIndex: PropTypes.number,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object)
};

const defaultProps = {
  header: null,
  headerStyle: {},
  itemHeight: 48,
  listRef: () => {},
  listStyle: {},
  overscanRowCount: 10,
  scrollPlaceholder: null,
  scrollToIndex: undefined,
  style: {},
  enableInfiniteScroll: false
};

/** A wrapper for ListItems */
class List extends Component {
  renderRows = ({
    index,
    isScrolling,
    key,
    style
  }) => {
    const { scrollPlaceholder, children } = this.props;

    let placeholder;

    if (scrollPlaceholder) {
      placeholder = scrollPlaceholder;
    }

    if (isArray(scrollPlaceholder) && scrollPlaceholder[index]) {
      placeholder = scrollPlaceholder[index];
    }

    return (
      <div
        key={key}
        style={style}
      >
        {
          isScrolling && placeholder
            ? placeholder
            : children[index]
        }
      </div>
    );
  }

  renderVirtualizedList = () => {
    const {
      overscanRowCount,
      itemHeight,
      scrollToIndex,
      children
    } = this.props;

    return (
      <AutoSizer>
        {({ height, width }) => (
          <VirtualizedList
            height={height}
            width={width}
            overscanRowCount={overscanRowCount}
            rowCount={children.length}
            rowHeight={itemHeight}
            rowRenderer={this.renderRows}
            scrollToIndex={scrollToIndex}
            style={styles.virtualizedList}
          />
        )}
      </AutoSizer>
    );
  }

  render() {
    const {
      children,
      header,
      headerStyle,
      itemHeight,
      listRef,
      listStyle,
      overscanRowCount,
      scrollPlaceholder,
      scrollToIndex,
      style,
      enableInfiniteScroll,
      ...custom
    } = this.props;

    return (
      <section ref={listRef} style={getStyles.root(style)} {...custom}>
        {header ? <h1 style={getStyles.listHeader(headerStyle)}>{header}</h1> : null}
        <ul style={getStyles.list(header, listStyle)}>
          {enableInfiniteScroll ? this.renderVirtualizedList() : children}
        </ul>
      </section>
    );
  }
}

List.displayName = displayName;
List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List;
