import React, { Component } from 'react';
import find from 'lodash/find';
import sample from 'lodash/sample';
import ImageLoader from '../../../../dist/image-loader';
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

const componentData = find(components, { displayName: 'ImageLoader' });
const style = {
  paper: {
    margin: 0,
    padding: '16px'
  },
  images: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  image: {
    height: '200px',
    width: 'auto'
  },
  error: {
    height: '200px',
    width: '200px',
    color: '#FEFEFE',
    backgroundColor: '#FD2A43',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    margin: '8px'
  }
};

const imgProps = {
  style: style.image
};

class ImageLoaderDoc extends Component {
  state = {
    image: '',
    placeholderImage: '',
    errorImage: ''
  }

  handleImageLoad = () => {
    const image = sample(images);

    this.setState({
      image
    });
  }

  handlePlaceholderLoad = () => {
    const image = sample(images);

    this.setState({
      placeholderImage: image
    });
  }

  handleErrorLoad = () => {
    this.setState({
      errorImage: 'unknown.jpg'
    });
  }

  render() {
    const { image, placeholderImage, errorImage } = this.state;

    return (
      <article className="page">
        <h1>ImageLoader</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <section>
          <h1>Examples</h1>
          <Markdown markdown={example} title="Code example" />
          <Paper style={style.paper}>
            <p>Click the buttons to load images</p>
            <Button style={style.button} onClick={this.handleImageLoad}>
              <p>Load image</p>
            </Button>
            <Button style={style.button} onClick={this.handlePlaceholderLoad}>
              <p>With placeholder</p>
            </Button>
            <Button style={style.button} onClick={this.handleErrorLoad}>
              <p>With error</p>
            </Button>
            <div style={style.images}>
              <ImageLoader src={image} imgProps={imgProps} />
              <ImageLoader
                src={placeholderImage}
                imgProps={imgProps}
                placeholder={
                  <img
                    src="https://cdn.anchor.fish/client/assets/defaults/picture.f682bf93.jpg"
                    alt="placeholder"
                    style={style.image}
                  />
                }
              />
              <ImageLoader
                src={errorImage}
                imgProps={imgProps}
                error={
                  <div style={style.error}>
                    <p>Failed to load image</p>
                  </div>
                }
              />
            </div>
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default ImageLoaderDoc;
