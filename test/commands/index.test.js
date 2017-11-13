/* eslint-env mocha */
/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
// import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Commands from '../../src/commands';
// import getStyles from '../../src/commands/get-styles';

chai.use(sinonChai);

describe('Checkbox', () => {
  const props = {
    commands: [
      { value: 'one', prefix: '/' },
      { value: 'two', prefix: '/' }
    ],
    value: '',
    style: {},
    headerStyle: {},
    titleStyle: {},
    description: {},
    commandStyle: {},
    paramStyle: {},
    onSelect: () => {},
    onChange: () => {},
    color: '#1BA6C4'
  };

  beforeEach(() => {
    global.navigator = { userAgent: 'all' };
  });

  afterEach(() => {
    global.navigator = undefined;
  });

  it('should be an instanceOf Commands', () => {
    const component = shallow(<Commands {...props} />);

    expect(component.instance()).to.be.instanceOf(Commands);
  });
});
