import colors from '../settings/colors';

export default {
  hr: {
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0,
    marginTop: -1,
    height: 1,
    border: 'none',
    backgroundColor: colors.grey,
  },
  text: {
    fontSize: '16px',
    color: colors.icons,
    padding: '8px 8px 8px 16px',
    borderTop: `1px solid ${colors.grey}`,
    margin: 0,
    cursor: 'default',
    textTransform: 'capitalize',
    fontWeight: 'normal'
  }
};
