import Color from 'color';

const darken = (color, amount) => {
  Color(color).darken(amount).string();
};

export default darken;
