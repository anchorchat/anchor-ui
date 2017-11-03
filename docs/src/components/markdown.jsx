import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import prism from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-jsx';

const propTypes = {
  markdown: PropTypes.string.isRequired
};

marked.setOptions({
  highlight(code, language) {
    return prism.highlight(code, prism.languages[language]);
  }
});

const Markdown = ({ markdown }) => (
  <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
);

Markdown.propTypes = propTypes;

export default Markdown;
