import React from 'react';
import PropTypes from 'prop-types';
import colors from '../settings/colors';

const IconMan = ({ color, ...custom }) => (
  <svg height="24" viewBox="0 0 24 24" width="24" {...custom}>
    <path d="m16.2972973 17.1707617v-.0552826c-.022113-.4422604-.2100737-2.1449631-2.0565111-2.9963145-2.1228501-.972973-3.7149877-1.5810811-3.9582309-2.2334152l-.0331695-1.5036855s.8513513-.58599512.9398034-1.83538085c.8181818-.60810811.8845209-2.04545455.8845209-2.24447175s-.2321868-.32063883-.2985258-.15479116c-.0221131.06633908-.0773956.07739558-.1216216.07739558 0 0 0-.0110565-.0110565-.0110565 0 0 1.514742-4.43366094-1.5810811-5.30712531 0 0-.60810815-.85135135-2.36609341-.75184275-.13267812.01105651-.42014741-.04422605-.54176903-.13267814 0 0 .03316954.18796069-.0110565.18796069-.08845212.01105651-.18796071.02211302-.28746929.04422604-.09950862.02211303-.1990172.04422605-.29852582.06633907-.15479117.04422605-.60810812.08845209-.75184274.07739558 0 0 .2100737.11056511.16584766.13267813-1.54791155.76289926-1.60319409 2.38820639-1.60319409 2.38820639s-.12162163 1.86855037.18796066 3.01842751c.02211304.06633908.03316954.13267812.05528258.18796071-.04422604 0-.07739558-.02211304-.09950862-.07739559-.06633904-.16584766-.29852579-.04422604-.29852579.15479117 0 .19901716.06633909 1.63636363.8955774 2.24447171.05528254 1.30466831.93980344 1.92383297.93980344 1.92383297l-.03316954 1.5036855c-.25429974.6523341-1.83538084 1.2604422-3.95823095 2.2334152-1.66953317.7628993-1.99017199 2.2444718-2.04545455 2.8415233l-.01105651.0110566h.01105651c0 .0552825-.01105651.1105651-.01105651.1437346v.0552825.0331696.6191646h16.2862408v-.6191646c.0110565 0 .0110565-.0110565.0110565-.022113" fill={color} transform="translate(4 3)" />
  </svg>
);

IconMan.propTypes = {
  color: PropTypes.string
};

IconMan.defaultProps = {
  color: colors.icons
};

IconMan.displayName = 'IconMan';

export default IconMan;
