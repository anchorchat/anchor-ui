import React from 'react';
import ReactMarkdown from 'react-markdown';
import Banner from 'anchor-ui/banner';
import _ from 'underscore';
import Props from './props';
import components from '../../components.json';
import bannerThumb from '../assets/images/bannerThumb.png';

const usage = '```js\n import Banner from \'anchor-ui/icons\';';

function BannerDoc() {
  const componentData = _.find(components, component => component.displayName === 'Banner');
  return (
    <article className="doc">
      <h1>Banner</h1>
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
        <Banner
          content={{ desktop: (bannerThumb), mobile: (bannerThumb) }}
          open
          hideBanner={() => {}}
        />
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default BannerDoc;
