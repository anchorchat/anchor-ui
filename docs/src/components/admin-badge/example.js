export default `
  \`\`\`jsx
  import React from 'react';
  import AdminBadge from 'anchor-ui/admin-badge';

  const AdminBadgeExample = () => (
    <section>
      <AdminBadge />
      <AdminBadge text="Custom Text" />
      <AdminBadge text="Inverted" inverted />
    </section>
  );

  export default AdminBadgeExample;
  \`\`\`
`;
