import React from 'react';
import PropTypes from 'prop-types';
import colors from '../settings/colors';

const propTypes = {
  color: PropTypes.string
};

const defaultProps = {
  color: colors.icons
};

const displayName = 'IconBriefcase';

const IconBriefcase = ({ color, ...custom }) => (
  <svg height="24" viewBox="0 0 24 24" width="24" {...custom}>
    <path d="m4.60275 8.284-.0795.0795v10.2315l.0795.0795h14.65725l.07875-.0795v-10.2315l-.07875-.0795zm14.65725 11.8905h-14.65725c-.87 0-1.5795-.70875-1.5795-1.5795v-10.2315c0-.87075.7095-1.5795 1.5795-1.5795h14.65725c.8715 0 1.57875.70875 1.57875 1.5795v10.2315c0 .87075-.70725 1.5795-1.57875 1.5795z" fill={color} /> {/* eslint-disable-line max-len, react/jsx-one-expression-per-line */}
    <path d="m14.9385 8.2135c-.41475 0-.75-.336-.75-.75v-1.86675l-.08025-.0795h-4.35525l-.0795.0795v1.86675c0 .414-.33525.75-.75.75-.414 0-.75-.336-.75-.75v-1.86675c0-.87075.7095-1.5795 1.5795-1.5795h4.35525c.8715 0 1.58025.70875 1.58025 1.5795v1.86675c0 .414-.33525.75-.75.75" fill={color} /> {/* eslint-disable-line max-len, react/jsx-one-expression-per-line */}
    <path d="m10.3065 12.8155h-6.22275c-.20625 0-.375-.16725-.375-.375 0-.207.16875-.375.375-.375h6.22275c.2085 0 .375.168.375.375 0 .20775-.1665.375-.375.375" fill={color} /> {/* eslint-disable-line max-len, react/jsx-one-expression-per-line */}
    <path d="m19.51875 12.8155h-6.222c-.207 0-.375-.16725-.375-.375 0-.207.168-.375.375-.375h6.222c.2085 0 .375.168.375.375 0 .20775-.1665.375-.375.375" fill={color} /> {/* eslint-disable-line max-len, react/jsx-one-expression-per-line */}
    <path d="m11.26875 14.14h1.3245v-2.361h-1.3245zm1.6995.75h-2.0745c-.20625 0-.375-.168-.375-.375v-3.111c0-.20775.16875-.375.375-.375h2.0745c.20775 0 .375.16725.375.375v3.111c0 .207-.16725.375-.375.375z" fill={color} /> {/* eslint-disable-line max-len, react/jsx-one-expression-per-line */}
  </svg>
);

IconBriefcase.propTypes = propTypes;
IconBriefcase.defaultProps = defaultProps;
IconBriefcase.displayName = displayName;

export default IconBriefcase;
