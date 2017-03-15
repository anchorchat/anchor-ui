import React, { PropTypes } from 'react';
import pure from 'recompose/pure';
import colors from '../settings/colors';

function IconActivity({ color }) {
  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
      <g fill={color}>
        <path d="M5.61173348,19.1475 L4.49423348,18.0225 C2.67923348,16.2075 2.49173348,13.44 4.07423348,11.8575 C4.74173348,11.19 5.65673348,10.8075 6.65423348,10.7775 C7.35173348,10.7625 7.60673348,10.68 7.65173348,10.4775 L7.68173348,10.3875 C7.84673348,9.945 8.10173348,9.5475 8.43173348,9.2175 C9.74423348,7.9125 11.9792335,7.9125 13.6292335,9.2175 L12.7667335,10.305 C11.6717335,9.435 10.2242335,9.3825 9.41423348,10.2 C9.23423348,10.38 9.09173348,10.5975 8.99423348,10.8375 C8.65673348,12.1125 7.27673348,12.15 6.75173348,12.165 C6.04673348,12.18 5.47673348,12.42 5.05673348,12.84 C4.00673348,13.8825 4.19423348,15.7725 5.46923348,17.0475 L6.59423348,18.165 L5.61173348,19.1475" />
        <path d="M9.23423348,20.805 L9.23423348,20.805 C7.98173348,20.805 6.72173348,20.2575 5.76923348,19.305 L4.65173348,18.1875 L5.63423348,17.205 L6.75173348,18.33 C7.44173348,19.02 8.34923348,19.4175 9.23423348,19.4175 C9.90923348,19.4175 10.5242335,19.1775 10.9592335,18.7425 C11.3792335,18.315 11.6117335,17.7525 11.6342335,17.1 C11.6492335,16.5225 11.6792335,15.135 12.9542335,14.805 C13.2017335,14.7075 13.4117335,14.565 13.5992335,14.385 C14.4167335,13.5675 14.3642335,12.1125 13.4792335,11.01 L14.5592335,10.1475 C15.8867335,11.7975 15.8942335,14.04 14.5742335,15.36 C14.2442335,15.6975 13.8542335,15.945 13.4042335,16.1175 L13.3217335,16.14 C13.1192335,16.1925 13.0367335,16.44 13.0142335,17.0775 C12.9917335,18.135 12.6017335,19.05 11.9342335,19.7175 C11.2367335,20.415 10.2767335,20.805 9.23423348,20.805" />
        <path d="M8.16173348,16.3875 C7.96673348,16.3875 7.77923348,16.3125 7.62923348,16.1625 C7.33673348,15.87 7.33673348,15.3975 7.62923348,15.105 L19.0067335,3.7275 C19.2992335,3.435 19.7792335,3.435 20.0717335,3.7275 C20.3642335,4.02 20.3642335,4.4925 20.0717335,4.785 L8.69423348,16.1625 C8.54423348,16.3125 8.35673348,16.3875 8.16173348,16.3875" />
        <path d="M10.2617335,12.1275 C9.90173348,12.1275 9.54173348,12.27 9.26423348,12.54 C8.71673348,13.0875 8.71673348,13.98 9.26423348,14.5275 C9.54173348,14.805 9.90173348,14.94 10.2617335,14.94 C10.6217335,14.94 10.9817335,14.805 11.2517335,14.5275 C11.8067335,13.98 11.8067335,13.0875 11.2517335,12.54 C10.9817335,12.27 10.6217335,12.1275 10.2617335,12.1275" />
        <path d="M8.93423348,16.785 C8.83673348,16.785 8.73923348,16.7475 8.67173348,16.6725 L7.12673348,15.1275 C6.97673348,14.9775 6.97673348,14.745 7.12673348,14.595 C7.26923348,14.4525 7.50923348,14.4525 7.65173348,14.595 L9.19673348,16.14 C9.34673348,16.29 9.34673348,16.5225 9.19673348,16.6725 C9.12923348,16.7475 9.03173348,16.785 8.93423348,16.785" />
        <path d="M18.7142335,7.005 C18.6167335,7.005 18.5192335,6.9675 18.4442335,6.9 L16.8992335,5.3475 C16.7492335,5.205 16.7492335,4.965 16.8992335,4.8225 C17.0492335,4.6725 17.2817335,4.6725 17.4317335,4.8225 L18.9767335,6.3675 C19.1192335,6.51 19.1192335,6.75 18.9767335,6.9 C18.9017335,6.9675 18.8042335,7.005 18.7142335,7.005" />
        <path d="M19.5917335,6.12 C19.5017335,6.12 19.4042335,6.0825 19.3292335,6.015 L17.7842335,4.47 C17.6342335,4.32 17.6342335,4.08 17.7842335,3.9375 C17.9267335,3.7875 18.1667335,3.7875 18.3092335,3.9375 L19.8617335,5.4825 C20.0042335,5.6325 20.0042335,5.865 19.8617335,6.015 C19.7867335,6.0825 19.6892335,6.12 19.5917335,6.12" />
        <path d="M20.4242335,5.295 C20.3267335,5.295 20.2292335,5.2575 20.1617335,5.1825 L18.6092335,3.6375 C18.4667335,3.495 18.4667335,3.255 18.6092335,3.1125 C18.7592335,2.9625 18.9917335,2.9625 19.1417335,3.1125 L20.6867335,4.6575 C20.8367335,4.8 20.8367335,5.04 20.6867335,5.1825 C20.6192335,5.2575 20.5217335,5.295 20.4242335,5.295" />
      </g>
    </svg>
  );
}

IconActivity.propTypes = {
  color: PropTypes.string
};

IconActivity.defaultProps = {
  color: colors.icons
};

IconActivity.displayName = 'IconActivity';

export default pure(IconActivity);
