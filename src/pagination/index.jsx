import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import map from 'lodash/map';
import getPager from '../internal/get-pager';
import getStyles from './get-styles';
import Button from '../button';
import IconChevronLeft from '../icons/icon-chevron-left';
import IconChevronRight from '../icons/icon-chevron-right';
import IconFirst from '../icons/icon-first';
import IconLast from '../icons/icon-last';
import styles from './styles';
import colors from '../settings/colors';

/** Navigate through large sets of data */
class Pagination extends Component {
  constructor() {
    super();

    this.state = {
      pager: {}
    };
  }

  componentDidMount() {
    const { initialPage, list, pageSize } = this.props;
    this.setPage(initialPage, list, pageSize);
  }

  componentWillReceiveProps(nextProps) {
    const { initialPage, list, pageSize } = nextProps;

    if (!isEqual(list, this.props.list)) {
      this.setPage(initialPage, list, pageSize);
    }
  }

  setPage = (page, list, pageSize) => {
    const newPager = getPager(list, page, pageSize);

    const items = list.slice(newPager.startIndex, newPager.endIndex + 1);

    this.setState({ pager: newPager });

    return this.props.onChange(items);
  }

  render() {
    const {
      list,
      pageSize,
      children,
      style,
      headerStyle,
      navStyle,
      navButtonStyle,
      iconButtonStyle,
      currentPageText,
      totalPagesText,
      totalItemsText
    } = this.props;
    const { currentPage, pages, totalPages, totalItems } = this.state.pager;

    return (
      <section style={getStyles.root(style)}>
        <header style={getStyles.header(headerStyle)}>
          <section style={styles.headerInfo}>
            <h1 style={styles.heading}>
              {currentPageText}: <strong style={styles.strong}>{currentPage}</strong>
            </h1>
            <h1 style={styles.heading}>
              {totalPagesText}: <strong style={styles.strong}>{totalPages}</strong>
            </h1>
            <h1 style={styles.heading}>
              {totalItemsText}: <strong style={styles.strong}>{totalItems}</strong>
            </h1>
          </section>
        </header>
        {children}
        <nav style={getStyles.nav(navStyle)}>
          <Button
            disabled={currentPage === 1}
            onClick={() => this.setPage(1, list, pageSize)}
            style={getStyles.iconButton(iconButtonStyle)}
          >
            <IconFirst color={colors.white} />
          </Button>
          <Button
            onClick={() => this.setPage(currentPage - 1, list, pageSize)}
            disabled={currentPage === 1}
            style={getStyles.iconButton(iconButtonStyle)}
          >
            <IconChevronLeft color={colors.white} />
          </Button>
          {map(pages, (page, index) =>
            <Button
              key={index} onClick={() => this.setPage(page, list, pageSize)}
              style={getStyles.navButton(navButtonStyle)}
              disabled={currentPage === page}
              inverted
            >
              {page}
            </Button>
          )}
          <Button
            disabled={currentPage === totalPages}
            onClick={() => this.setPage(currentPage + 1, list, pageSize)}
            style={getStyles.iconButton(iconButtonStyle)}
          >
            <IconChevronRight color={colors.white} />
          </Button>
          <Button
            disabled={currentPage === totalPages}
            onClick={() => this.setPage(totalPages, list, pageSize)}
            style={getStyles.iconButton(iconButtonStyle)}
          >
            <IconLast color={colors.white} />
          </Button>
        </nav>
      </section>
    );
  }
}

Pagination.propTypes = {
  /** The list to navigate through */
  list: PropTypes.arrayOf(Object).isRequired,
  /**
   * Callback fired when the navigation changes
   *
   * @param {list} array The part of the list navigated to.
   */
  onChange: PropTypes.func.isRequired,
  /** Initial active page */
  initialPage: PropTypes.number,
  /** The page's size */
  pageSize: PropTypes.number,
  /** The paginated list */
  children: PropTypes.node.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the header element */
  headerStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the nav element */
  navStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the nav button elements */
  navButtonStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the icon button elements */
  iconButtonStyle: PropTypes.instanceOf(Object),
  /** Text to display the current page */
  currentPageText: PropTypes.node,
  /** Text to display the total pages */
  totalPagesText: PropTypes.node,
  /** Text to display the total items */
  totalItemsText: PropTypes.node,
};

Pagination.defaultProps = {
  initialPage: 1,
  pageSize: 10,
  style: {},
  headerStyle: {},
  navStyle: {},
  navButtonStyle: {},
  iconButtonStyle: {},
  currentPageText: 'Current Page',
  totalPagesText: 'Total Pages',
  totalItemsText: 'Total Items'
};

Pagination.displayName = 'Pagination';

export default Pagination;
