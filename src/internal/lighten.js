import Color from 'color';

const lighten = (color, amount) => {
  Color(color).lighten(amount).string();
};

export default lighten;
