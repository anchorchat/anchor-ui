# Anchor UI Code Style

# General

Our `eslint` is configured with [eslint-config-airbnb](https://github.com/airbnb/javascript). Please refer to airbnb's [documentation](https://github.com/airbnb/javascript) for general guidelines.

*All files must be free of eslint errors before submitting a pull request. Travis will slap you if he finds any.*

# JavaScript

# React

# CSS in JS

## General

### File structure
All styles describing a Component should live in a `styles.js` file in the Component's directory. This means no defining of styles in the Component or `getStyles` functions.

### Exports
All styles should be exported directly, don't save them in constants first.

```js
// bad
const style = {
  ...
};

export default style;

// good
export default {
  ...
};
```

### Styles key naming
Styles describing the Component's root element should always have `root` as object key. All other keys should match the HTML element they are applied to.

```js
// bad
export default {
  myComponent: {
    backgroundColor: 'purple'
  },
  componentHeader: {
    color: 'blue'
  }
};

// very bad
export default {
  backgroundColor: 'purple'
};

// good
export default {
  root: {
    backgroundColor: 'purple'
  },
  header: {
    color: 'red'
  }
};
```

### Mixing short- and longhands

Just. Don't. Do. It. [Radium](https://github.com/FormidableLabs/radium) will shout out warnings if you do!

```js
// bad
export default {
  root: {
    margin: '10x',
    marginBottom: '0'
  }
};

// good
export default {
  root: {
    marginTop: '10px',
    marginRight: '10px',
    marginBottom: '0',
    marginLeft: '10px',
  }
};
```

### Prefer longhands over shorthands

They read a little better.

```js
// bad
export default {
  root: {
    padding: '10px 0 10px 10px'
  }
};

// good
export default {
  root: {
    paddingTop: '10px',
    paddingRight: '0',
    paddingBottom: '10px',
    paddingLeft: '10px',
  }
};
```

### Nesting

Leave an empty line above the nested object. This reads better.

```js
// bad
export default {
  root: {
    color: 'red',
    ':hover': {
      color: 'purple'
    }
  }
};

// good
export default {
  root: {
    color: 'red',

    ':hover': {
      color: 'purple'
    }
  }
};
```

### CSS rules

@IanCStewart please add this :)
