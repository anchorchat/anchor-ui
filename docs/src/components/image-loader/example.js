export default `
\`\`\`jsx
import React, { Component } from 'react';
import ImageLoader from 'anchor-ui/image-loader';

class ImageLoaderExample extends Component {
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

    const error = <p>Error while loading component!</p>;

    const placeholder = <p>Loading image...</p>;

    return (
      <ImageLoader
        src="https://static.pexels.com/photos/205508/pexels-photo-205508.jpeg"
        alt="macbook and coffee"
        imgProps={imgProps}
        error={error}
        placeholder={placeholder}
        onError={this.handleOnError}
        onLoad={this.handleOnLoad}
      />
    );
  }
}

export default ImageLoaderExample;
\`\`\`
`;
