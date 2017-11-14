import React, { Component } from 'react';
import _ from 'lodash';
import Image from '../../../../dist/image';
import Button from '../../../../dist/button';
import Props from '../props';
import components from '../../../components.json';
import Paper from '../../../../dist/paper';
import Markdown from '../markdown';
import example from './example';

const images = [
  'https://static.pexels.com/photos/205508/pexels-photo-205508.jpeg',
  'https://static.pexels.com/photos/210658/pexels-photo-210658.jpeg',
  'https://static.pexels.com/photos/211451/pexels-photo-211451.jpeg',
  'https://static.pexels.com/photos/281455/pexels-photo-281455.jpeg',
  'https://static.pexels.com/photos/205352/pexels-photo-205352.jpeg',
  'https://static.pexels.com/photos/635628/pexels-photo-635628.jpeg'
];

class ImageDoc extends Component {
  state = {
    basicImage: '',
    preloadImage: '',
    failedImage: ''
  }

  handleBasicImageLoad = () => {
    const image = _.sample(images);

    this.setState({
      basicImage: image
    });
  }

  handlePreloadImageLoad = () => {
    const image = _.sample(images);

    this.setState({
      preloadImage: image
    });
  }

  handleFailedImageLoad = () => {
    this.setState({
      failedImage: 'failedImage.jpg'
    });
  }

  render() {
    const { basicImage, preloadImage, failedImage } = this.state;

    const componentData = _.find(components, component => component.displayName === 'Image');
    const style = {
      paper: {
        margin: 0,
        padding: '20px'
      }
    };

    const imgProps = { width: 200, height: 200 };

    return (
      <article className="page">
        <h1>Image</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <section>
          <h1>Examples</h1>
          <Markdown markdown={example} title="Code example" />
          <Paper style={style.paper}>
            <p>Basic usage</p>
            <Button onClick={this.handleBasicImageLoad}>
              <p>Load image</p>
            </Button>
            <Image src={basicImage} imgProps={imgProps} />
          </Paper>
          <Paper style={style.paper}>
            <p>With preload component</p>
            <Button onClick={this.handlePreloadImageLoad}>
              <p>Load image</p>
            </Button>
            <Image
              src={preloadImage}
              imgProps={imgProps}
              preloadComponent={
                <div style={imgProps}>
                  Loading...
                </div>
              }
            />
          </Paper>
          <Paper style={style.paper}>
            <p>With failed image component</p>
            <Button onClick={this.handleFailedImageLoad}>
              <p>Load image</p>
            </Button>
            <Image
              src={failedImage}
              imgProps={imgProps}
              errorComponent={
                <div style={{ width: 200, height: 200, color: 'red' }}>
                  Failed to load image
                </div>
              }
            />
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default ImageDoc;
