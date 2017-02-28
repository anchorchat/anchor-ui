import React, { PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import MenuItem from '../menu-item';
import styles from '../style/select';
import IconChevronDown from '../icons/icon-chevron-down';
import colors from '../settings/colors';

function Select({ open }) {
  let items = null;

  if (open) {
    items = [
      <MenuItem text="hi" onClick={() => {}} />,
      <MenuItem text="hi" onClick={() => {}} />,
      <MenuItem text="hi" onClick={() => {}} />,
    ];
  }

  return (
    <section style={styles.container}>
      <header style={styles.header}>
        bla
        <div style={styles.icon}>
          <IconChevronDown color={colors.white} />
        </div>
      </header>
      <section>
        {items}
      </section>
    </section>
  );
}

Select.propTypes = {
  open: PropTypes.bool
};

Select.defaultProps = {
  open: false
};

export default pure(Radium(Select));
