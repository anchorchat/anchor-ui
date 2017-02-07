import React from 'react';
import _ from 'underscore';
import { Alert } from 'anchor-ui';
import components from '../../components.json';
import omitSheetFromProps from '../utils/omit-sheet-from-props';

function AlertDoc() {
  const componentData = components['src/components/alert.jsx'];
  const props = omitSheetFromProps(componentData.props);
  return (
    <article>
      <h1>Alert</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Examples</h1>
        <Alert text="Success!" type="success" hideAlert={() => {}} onClick={() => {}} />
        <Alert text="Info!" type="info" hideAlert={() => {}} onClick={() => {}} />
        <Alert text="Warning!" type="warning" hideAlert={() => {}} onClick={() => {}} />
        <Alert text="Error!" type="error" hideAlert={() => {}} onClick={() => {}} />
      </section>
      <section>
        <h1>Props</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Default value</th>
              <th>Required</th>
            </tr>
          </thead>
          <tbody>
            {_.map(props, (prop, name) => (
              <tr key={name}>
                <td>{name}</td>
                <td> {/* TODO figure out how to display type */} </td>
                <td>{prop.description}</td>
                <td>{prop.defaultValue && prop.defaultValue.value ? prop.defaultValue.value : ''}</td>
                <td>{prop.required ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </article>
  );
}

export default AlertDoc;
