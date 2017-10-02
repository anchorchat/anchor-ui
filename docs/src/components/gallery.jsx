import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'lodash';
import Gallery from '../../../dist/gallery';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Gallery from \'anchor-ui/gallery\';';

const GalleryDoc = () => {
  const componentData = _.find(components, component => component.displayName === 'Gallery');

  const style = {
    paper: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: 0,
      padding: '20px'
    }
  };

  const images = [
    {
      src: 'https://source.unsplash.com/featured/?man',
      alt: 'https://source.unsplash.com/featured/?man'
    },
    {
      src: 'https://source.unsplash.com/featured/?woman',
      alt: 'https://source.unsplash.com/featured/?woman'
    },
    {
      src: 'https://source.unsplash.com/featured/?nature',
      alt: 'https://source.unsplash.com/featured/?nature'
    },
    {
      src: 'https://source.unsplash.com/featured/?portrait',
      alt: 'https://source.unsplash.com/featured/?portrait'
    },
    {
      src: 'https://source.unsplash.com/featured/?office',
      alt: 'https://source.unsplash.com/featured/?office'
    },
    {
      src: 'https://source.unsplash.com/featured/?design',
      alt: 'https://source.unsplash.com/featured/?design'
    },
    {
      src: 'https://source.unsplash.com/featured/?tree',
      alt: 'https://source.unsplash.com/featured/?tree'
    }
  ];

  return (
    <article className="doc">
      <h1>Gallery</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Usage</h1>
        <ReactMarkdown source={usage} className="markdown" />
      </section>
      <section>
        <h1>Examples</h1>
        <Paper style={style.paper}>
          <h2>Default</h2>
          <Gallery images={images} />
          <h2>With imageHeight</h2>
          <Gallery images={images} imageHeight={240} />
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
};

export default GalleryDoc;
