import _ from 'underscore';

function omitSheetFromProps(props) {
  return _.omit(props, 'sheet');
}

export default omitSheetFromProps;
