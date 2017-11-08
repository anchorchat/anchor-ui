export default `
  \`\`\`jsx
  import React from 'react';
  import Alert from 'anchor-ui/alert';

  const AlertExample = ({ hideAlert }) => (
    <section>
      <Alert text="Success!" type="success" hideAlert={hideAlert} />
      <Alert text="Info!" type="info" hideAlert={hideAlert} />
      <Alert text="Warning!" type="warning" hideAlert={hideAlert} />
      <Alert text="Error!" type="error" hideAlert={hideAlert} />
    </section>
  );

  export default AlertExample;
  \`\`\`
`;
