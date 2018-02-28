import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Paper from '../../../../dist/paper';
import FocusManager, { withFocus } from '../../../../dist/focus-manager';
import Markdown from '../markdown';
import components from '../../../components.json';
import example from './example';
import Props from '../props';

const FocusedComponent = ({ focused }) => {
  const style = {
    width: '100px',
    height: '100px',
    color: focused ? 'white' : 'black',
    backgroundColor: focused ? 'blue' : 'yellow'
  };

  return (
    <div style={style}>
      {
        focused
          ? 'focused'
          : 'not focused'
      }
    </div>
  );
};

FocusedComponent.propTypes = {
  focused: PropTypes.bool.isRequired
};

const FocusedClick = withFocus(['onClick', 'onMouseOut'])(FocusedComponent);

const FocusedMouse = withFocus(['onMouseOver', 'onMouseOut'])(FocusedComponent);

const focusManagerDoc = () => {
  const componentData = _.find(components, component => component.displayName === 'FocusManager');

  return (
    <article className="page">
      <h1>FocusManager</h1>
      <section>
        <h1>Description</h1>
        <p>
          Component which checks if the wrapped component is currently focused.
        </p>
        <p>
          By default it listens to &apos;onFocus&apos;, &apos;onBlur&apos;, &apos;onClick&apos;,
          &apos;onMouseEnter&apos;, &apos;onMouseLeave&apos;, &apos;onMouseOut&apos;
          and &apos;onMouseOver&apos; events.
        </p>
        <p>
          You can change this by passing an array of events to the factory function
          or as prop to the component.
        </p>
      </section>
      <section>
        <h1>Examples</h1>
        <Markdown markdown={example} title="Code examples" />
        <Paper style={{ margin: 0, padding: '16px', display: 'flex' }}>
          <div style={{ padding: '10px' }}>
            <p>FocusManager with render</p>
            <div style={{ width: '100px', height: '100px' }}>
              <FocusManager
                render={(focused) => {
                  const style = {
                    width: '100px',
                    height: '100px',
                    color: focused ? 'white' : 'black',
                    backgroundColor: focused ? 'blue' : 'yellow'
                  };

                  return (
                    <div style={style}>
                      {
                        focused
                          ? 'focused'
                          : 'not focused'
                      }
                    </div>
                  );
                }}
              />
            </div>
          </div>
          <div>
            <p>FocusManager with children</p>
            <div style={{ width: '100px', height: '100px' }}>
              <FocusManager>
                {(focused) => {
                  const style = {
                    width: '100px',
                    height: '100px',
                    color: focused ? 'white' : 'black',
                    backgroundColor: focused ? 'blue' : 'yellow'
                  };

                  return (
                    <div style={style}>
                      {
                        focused
                          ? 'focused'
                          : 'not focused'
                      }
                    </div>
                  );
                }}
              </FocusManager>
            </div>
          </div>
          <div style={{ padding: '10px' }}>
            <p>withFocus with focus on click</p>
            <div style={{ width: '100px', height: '100px' }}>
              <FocusedClick />
            </div>
          </div>
          <div style={{ padding: '10px' }}>
            <p>withFocus with focus on mouse over</p>
            <div style={{ width: '100px', height: '100px' }}>
              <FocusedMouse />
            </div>
          </div>
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
};

export default focusManagerDoc;
