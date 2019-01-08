import React from 'react';
import PropTypes from 'prop-types';
import colors from '../settings/colors';

const IconWoman = ({ color, ...custom }) => (
  <svg height="24" viewBox="0 0 24 24" width="24" {...custom}>
    <path d="m15.6521739 17.1188811v-.0547279c-.0218912-.4159319-.1970204-2.0577683-1.9702037-2.8677409-2.0358771-.930374-3.5573122-1.5214351-3.79811491-2.1453329l-.02189117-.6457891c.98510188-.3174217 2.04682278-.8975372 3.16327148-1.86074788 0 0-.9960474-2.87868655-1.0179385-5.26482215 0-.32836727-.0437823-.62389783-.1204014-.89753724-.3064761-1.43387047-1.3353603-2.51748251-2.72544846-2.94435998-.06567347-.02189116-.1751292.0437823-.24080267.03283672-.06567347-.02189115-.1313469-.26269382-.19702037-.2736394-.25174823-.05472788-.51444207-.10945576-.78808147-.10945576-1.8826391 0-3.4588021 1.39008817-3.9075707 3.13043478-.0985102.30647614-.15323807.64578899-.16418365 1.01793858-.02189115 2.3861356-1.01793858 5.26482215-1.01793858 5.26482215.78808149.67862568 1.5542718 1.17117668 2.27667985 1.51048948.21891154.1094558.45971421.2189115.71146244.3064761l-.02189113.7333537c-.24080271.6238978-1.7622378 1.2149589-3.79811494 2.1453329-1.6089997.7333536-1.90453026 2.1562785-1.95925814 2.7254484l-.01094558.0109456h.01094558c0 .0547279-.01094558.0985102-.01094558.1422925v.0547279.0328367.5910611h15.6083916v-.5910611c0-.0109456 0-.0218911 0-.0437823" fill={color} transform="translate(4 3)" /> {/* eslint-disable-line max-len, react/jsx-one-expression-per-line */}
  </svg>
);

IconWoman.propTypes = {
  color: PropTypes.string
};

IconWoman.defaultProps = {
  color: colors.icons
};

IconWoman.displayName = 'IconWoman';

export default IconWoman;
