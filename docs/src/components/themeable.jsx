import React from 'react';
import ReactMarkdown from 'react-markdown';

const usage = '```js\n import themeable from \'anchor-ui/themeable\'; \n export default themeable(YourComponent);';

function ThemeableDoc() {
  return (
    <article className="doc">
      <h1>ThemeProvider</h1>
      <section>
        <h1>Description</h1>
        <p>
          A higher order component which applies theme to your component by passing a color prop
        </p>
      </section>
      <section>
        <h1>Usage</h1>
        <ReactMarkdown source={usage} className="markdown" />
      </section>
    </article>
  );
}

export default ThemeableDoc;
