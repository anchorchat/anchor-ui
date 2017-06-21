# Anchor UI Code Style

# General

Our `eslint` is configured with [eslint-config-airbnb](https://github.com/airbnb/javascript). Please refer to airbnb's [documentation](https://github.com/airbnb/javascript) for general guidelines.

*All files must be free of eslint errors before submitting a pull request. Travis will slap you if he finds any.*

# JavaScript

# React

## General

### File structure
All Components should live in their own directory, this directory has the Component's name with a dashed format. The file containing the component should always be called `index.jsx`. All files containing components should have the `.jsx` extension.

```js
// bad
'src/AppHeader/index.jsx'

// good
'src/app-header/index.jsx'

// bad
'src/app-header/app-header.jsx'

// good
'src/app-header/index.jsx'

// bad
'src/app-header/index.js'

// good
'src/app-header/index.jsx'
```

### Stateless versus Class
Always prefer stateless Components over Class components.

### Defining stateless Components
Always define them as arrow functions.

```js
// bad
function MyComponent(props) { ... };

// good
const MyComponent = (props) => (...);
```

# CSS in JS

## General

### File structure
All styles describing a Component should live in a `styles.js` file in the Component's directory. This means no defining of styles in the Component or `getStyles` functions.

### Exports
All styles should be saved in a constant and then exported. Don't export them directly.

```js
// bad
export default {
  ...
};

// good
const style = {
  ...
};

export default style;
```

### Styles key naming
Styles describing the Component's root element should always have `root` as object key. All other keys should match the HTML element they are applied to.

```js
// bad
const style = {
  myComponent: {
    backgroundColor: 'purple'
  },
  componentHeader: {
    color: 'blue'
  }
};

// very bad
const style = {
  backgroundColor: 'purple'
};

// good
const style = {
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
const style = {
  root: {
    margin: '10x',
    marginBottom: '0'
  }
};

// good
const style = {
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
const style = {
  root: {
    padding: '10px 0 10px 10px'
  }
};

// good
const style = {
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
const style = {
  root: {
    color: 'red',
    ':hover': {
      color: 'purple'
    }
  }
};

// good
const style = {
  root: {
    color: 'red',

    ':hover': {
      color: 'purple'
    }
  }
};
```

## CSS rules

### Transitions

Try to use transitions that are lightweight.

```css
/* bad */
.root {
  position: absolute;
  top: 0;
  left: 0;
  transition: all ease-in-out;
}

.root:hover {
  left: 250px;
}

/* good */
.root {
  position: absolute;
  top: 0;
  left: 0;
  transition: all ease-in-out;
}

.root:hover {
  transform: translate(250px);
}
```

### Multiple items

Use a line-break when you have multiple items with the same style.

```css
/* bad */
.root, .container {
  background: blue;
}

/* good */
.root,
.container {
  background: blue;
}
```

### Fancy css

If possible use `display: flex` and/or `display: grid` instead of `float`. If you're not sure if this css feature is compatible, check [caniuse.com](http://caniuse.com/). To see which browser you should support check the compatibility of React.
