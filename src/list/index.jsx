import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { AutoSizer, List } from 'react-virtualized';
import getStyles from './get-styles';

const displayName = 'List';

const propTypes = {
  /** ListItems to render */
  children: PropTypes.node.isRequired,
  /** Optional header text */
  header: PropTypes.node,
  /** Reference list element */
  listRef: PropTypes.func,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the header element */
  headerStyle: PropTypes.instanceOf(Object),
  /** Specify the height of each item in the list, defaults to 52px */
  itemHeight: PropTypes.number
};

const defaultProps = {
  header: null,
  style: {},
  headerStyle: {},
  listRef: () => {},
  itemHeight: 52
};

/** A wrapper for ListItems */
const ListWrapper = ({
  children, header, listRef, style, headerStyle, open, itemHeight, ...custom
}) => {

  return (
    <div ref={listRef} style={getStyles.root(style)} {...custom}>
      {header ? <h1 style={getStyles.listHeader(headerStyle)}>{header}</h1> : null}
      <div style={{ height: 'calc(100% - 36px)' }}>
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height}
              width={width}
              overscanRowCount={20}
              rowCount={children.length}
              rowHeight={itemHeight}
              rowRenderer={({ index, key, style, isScrolling }) => (
                <div
                  key={key}
                  style={style}
                >
                  {children[index]}
                </div>
              )}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );
};

ListWrapper.displayName = displayName;
ListWrapper.propTypes = propTypes;
ListWrapper.defaultProps = defaultProps;

export default Radium(ListWrapper);
