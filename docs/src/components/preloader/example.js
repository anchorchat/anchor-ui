export default `
\`\`\`jsx
import React, { Component } from 'react';
import Preloader from 'anchor-ui/preloader';

class MyComponent extends Component {
  handleOnLoad = () => {
    console.log('Loaded image');
  }

  handleOnLoad = () => {
    console.log('Failed to load image');
  }


  render() {
    const imgProps = {
      height: 200,
      width: 200
    };

    const errorComponent = (
      <div>
        Error while loading component!
      </div>
    );

    const preloadComponent = (
      <div>
        Loading image...
      </div>
    );

    return (
      <Preloader
        src="https://static.pexels.com/photos/205508/pexels-photo-205508.jpeg"
        alt="macbook and coffee"
        imgProps={imgProps}
        errorComponent={errorComponent}
        preloadComponent={preloadComponent}
        onError={this.handleOnError}
        onLoad={this.handleOnLoad}
      />
    );
  }
}
\`\`\`
`;
