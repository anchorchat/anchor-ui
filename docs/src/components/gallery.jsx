import React, { Component } from 'react';
import find from 'lodash/find';
import Gallery from '../anchor-ui/gallery';
import Props from './props';
import components from '../components.json';
import Paper from '../anchor-ui/paper';
import Select from '../anchor-ui/select';
import MenuItem from '../anchor-ui/menu-item';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import Gallery from 'anchor-ui/gallery';
  \`\`\`
`;

const componentData = find(components, { displayName: 'Gallery' });

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


const images = [
  {
    src: 'https://source.unsplash.com/random/800x600',
    alt: '800x600',
    title: '800x600',
    width: 800,
    height: 600,
    placeholder: 'hotpink',
    placeholderType: 'color'
  },
  {
    src: 'https://source.unsplash.com/random/600x600',
    alt: '600x600',
    title: '600x600',
    width: 600,
    height: 600,
    placeholder: 'rebeccapurple',
    placeholderType: 'color'
  },
  {
    src: 'https://source.unsplash.com/random/800x400',
    alt: '800x400',
    title: '800x400',
    width: 800,
    height: 400,
    placeholder: 'blanchedalmond',
    placeholderType: 'color'
  },
  {
    src: 'https://source.unsplash.com/random/1920x1080',
    alt: '1920x1080',
    title: '1920x1080',
    width: 1920,
    height: 1080,
    placeholder: 'crimson',
    placeholderType: 'color'
  },
  {
    src: 'https://source.unsplash.com/random/940x600',
    alt: '940x600',
    title: '940x600',
    width: 940,
    height: 600,
    placeholder: 'seagreen',
    placeholderType: 'color'
  },
  {
    src: 'https://source.unsplash.com/random/300x400',
    alt: '300x400',
    title: '300x400',
    width: 300,
    height: 400,
    placeholder: 'cornflowerblue',
    placeholderType: 'color'
  }
];

class GalleryDoc extends Component {
  constructor() {
    super();

    this.state = {
      lightbox: false,
      rowHeight: 320
    };
  }

  selectRowHeight = (event, rowHeight) => this.setState({ rowHeight })

  selectLightbox = (event, lightbox) => this.setState({ lightbox })

  render() {
    const { lightbox, rowHeight } = this.state;

    return (
      <article className="page">
        <h1>Gallery</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <Markdown markdown={usage} title="Code example" />
        <section>
          <h1>Examples</h1>
          <h1>Examples</h1>
          <div style={style.options}>
            <Select
              style={style.select}
              label="Lightbox"
              value={lightbox}
              onChange={this.selectLightbox}
            >
              <MenuItem text="On" value />
              <MenuItem text="Off" value={false} />
            </Select>
            <Select
              style={style.select}
              label="Row height"
              value={rowHeight}
              onChange={this.selectRowHeight}
            >
              <MenuItem text="400" value={400} />
              <MenuItem text="320" value={320} />
              <MenuItem text="240" value={240} />
              <MenuItem text="120" value={120} />
            </Select>
          </div>
          <Paper style={style.paper}>
            <Gallery
              items={images}
              rowHeight={rowHeight}
              enableLightbox={lightbox}
            />
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default GalleryDoc;
