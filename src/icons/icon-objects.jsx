import React, { PropTypes } from 'react';
import pure from 'recompose/pure';
import colors from '../settings/colors';

function IconObjects({ color }) {
  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
      <g fill={color}>
        <path d="M16.68018,15.0963462 C16.49586,15.0963462 16.31154,15.0271154 16.17114,14.8955769 C15.88962,14.6255769 15.88962,14.1825 16.17114,13.9125 L17.94882,12.2025 C18.22962,11.9325 18.68538,11.9325 18.9669,12.2025 L20.74386,13.9125 C21.02538,14.1825 21.02538,14.6255769 20.74386,14.8955769 C20.46306,15.1655769 20.0073,15.1655769 19.72578,14.8955769 L18.45786,13.6771154 L17.18922,14.8955769 C17.04882,15.0271154 16.8645,15.0963462 16.68018,15.0963462" />
        <path d="M3.72018,15.0963462 C3.53586,15.0963462 3.35154,15.0271154 3.21114,14.8955769 C2.92962,14.6255769 2.92962,14.1825 3.21114,13.9125 L4.98882,12.2025 C5.26962,11.9325 5.72538,11.9325 6.0069,12.2025 L7.78386,13.9125 C8.06538,14.1825 8.06538,14.6255769 7.78386,14.8955769 C7.50306,15.1655769 7.0473,15.1655769 6.76578,14.8955769 L5.49786,13.6771154 L4.22922,14.8955769 C4.08882,15.0271154 3.9045,15.0963462 3.72018,15.0963462" />
        <path d="M11.88048,20.5361538 C7.77864,20.5361538 4.44,17.3307692 4.44,13.3846154 C4.44,13.0038462 4.76184,12.6923077 5.16,12.6923077 C5.55816,12.6923077 5.88,13.0038462 5.88,13.3846154 C5.88,16.5692308 8.57136,19.1515385 11.88048,19.1515385 C15.1896,19.1515385 17.88096,16.5692308 17.88096,13.3846154 C17.88096,13.0038462 18.2028,12.6923077 18.60096,12.6923077 C18.99912,12.6923077 19.32096,13.0038462 19.32096,13.3846154 C19.32096,17.3307692 15.98232,20.5361538 11.88048,20.5361538" />
        <path d="M11.64,19.7884615 C11.24184,19.7884615 10.92,19.4769231 10.92,19.0961538 L10.92,6.46153846 C10.92,6.08076923 11.24184,5.76923077 11.64,5.76923077 C12.03816,5.76923077 12.36,6.08076923 12.36,6.46153846 L12.36,19.0961538 C12.36,19.4769231 12.03816,19.7884615 11.64,19.7884615" />
        <path d="M11.59464,4.38461538 C11.22384,4.38461538 10.92,4.67538462 10.92,5.03538462 C10.92,5.38846154 11.22384,5.67923077 11.59464,5.67923077 C11.9676,5.67923077 12.27,5.38846154 12.27,5.03538462 C12.27,4.67538462 11.9676,4.38461538 11.59464,4.38461538 Z M11.59464,7.06384615 C10.42896,7.06384615 9.48,6.15692308 9.48,5.03538462 C9.48,3.91384615 10.42896,3 11.59464,3 C12.76176,3 13.71,3.91384615 13.71,5.03538462 C13.71,6.15692308 12.76176,7.06384615 11.59464,7.06384615 L11.59464,7.06384615 Z" />
        <path d="M14.4616216,10.6153846 L8.81837838,10.6153846 C8.38793514,10.6153846 8.04,10.3038462 8.04,9.92307692 C8.04,9.54230769 8.38793514,9.23076923 8.81837838,9.23076923 L14.4616216,9.23076923 C14.8920649,9.23076923 15.24,9.54230769 15.24,9.92307692 C15.24,10.3038462 14.8920649,10.6153846 14.4616216,10.6153846" />
      </g>
    </svg>
  );
}

IconObjects.propTypes = {
  color: PropTypes.string
};

IconObjects.defaultProps = {
  color: colors.icons
};

IconObjects.displayName = 'IconObjects';

export default pure(IconObjects);
