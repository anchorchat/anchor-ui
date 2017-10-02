export default {
  root: {
    width: '100%',
    overflow: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '2px',
    boxSizing: 'border-box'
  },
  itemContainer: {
    position: 'relative',
    height: '320px',
    flexGrow: '1',
    margin: '2px',
    display: 'block',
    padding: '0',
    background: 'none',
    outline: 'none',
    border: 'none'
  },
  item: {
    height: '320px',
    objectFit: 'cover',
    maxWidth: '100%',
    minWidth: '100%',
    vertialAlign: 'bottom'
  },
  after: {
    flexGrow: 9999,
    minWidth: '300px',
    height: '0'
  }
};
