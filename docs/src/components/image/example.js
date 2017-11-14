export default `
\`\`\`jsx
import React, { Component } from 'react';
import Image from 'anchor-ui/image';

class ImageExample extends Component {
  handleOnLoad = () => {
    console.log('Loaded image');
  }

  handleOnError = () => {
    console.log('Failed to load image');
  }

  render() {
    const imgProps = {
      height: 200,
      width: 200,
      onClick: () => console.log('clicked image')
    };

    const errorComponent = <p>Error while loading component!</p>;

    const preloadComponent = <p>Loading image...</p>;

    return (
      <Image
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

export default ImageExample;
\`\`\`
`;
