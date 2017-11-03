import React, { Component } from 'react';
import _ from 'lodash';
import Gallery from '../../../dist/gallery';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';
import Select from '../../../dist/select';
import MenuItem from '../../../dist/menu-item';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import Gallery from 'anchor-ui/gallery';
  \`\`\`
`;

const images = [
  {
    src: 'https://source.unsplash.com/featured/?man',
    alt: 'man',
    title: 'man'
  },
  {
    src: 'https://source.unsplash.com/featured/?woman',
    alt: 'woman',
    title: 'woman'
  },
  {
    src: 'https://source.unsplash.com/featured/?nature',
    alt: 'nature',
    title: 'nature'
  },
  {
    src: 'https://source.unsplash.com/featured/?portrait',
    alt: 'portrait',
    title: 'portrait'
  },
  {
    src: 'https://source.unsplash.com/featured/?office',
    alt: 'office',
    title: 'office'
  },
  {
    src: 'https://source.unsplash.com/featured/?design',
    alt: 'design',
    title: 'design'
  },
  {
    src: 'https://source.unsplash.com/featured/?tree',
    alt: 'tree',
    title: 'tree'
  }
];

class GalleryDoc extends Component {
  constructor() {
    super();

    this.state = {
      lightbox: false,
      itemHeight: 320
    };
  }

  selectItemHeight = (event, itemHeight) => this.setState({ itemHeight })

  selectLightbox = (event, lightbox) => this.setState({ lightbox })

  render() {
    const componentData = _.find(components, component => component.displayName === 'Gallery');

    const style = {
      paper: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        margin: 0,
        padding: '20px'
      },
      options: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '10px 0'
      },
      select: {
        margin: '5px'
      }
    };

    return (
      <article className="doc">
        <h1>Gallery</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <section>
          <h1>Usage</h1>
          <Markdown markdown={usage} />
        </section>
        <section>
          <h1>Examples</h1>
          <h1>Examples</h1>
          <div style={style.options}>
            <Select style={style.select} label="Lightbox" value={this.state.lightbox} onChange={this.selectLightbox}>
              <MenuItem text="On" value />
              <MenuItem text="Off" value={false} />
            </Select>
            <Select style={style.select} label="Item height" value={this.state.itemHeight} onChange={this.selectItemHeight}>
              <MenuItem text="400" value={400} />
              <MenuItem text="320" value={320} />
              <MenuItem text="240" value={240} />
              <MenuItem text="120" value={120} />
            </Select>
          </div>
          <Paper style={style.paper}>
            <Gallery
              items={images}
              itemHeight={this.state.itemHeight}
              enableLightbox={this.state.lightbox}
            />
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default GalleryDoc;
