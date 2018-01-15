/* eslint-env mocha */
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import PropTypes from 'prop-types';
import propTypes from '../../src/internal/prop-types';

chai.use(sinonChai);

describe('propTypes', () => {
  afterEach(() => {
    PropTypes.number.restore();
  });

  describe('minMax', () => {
    it('should return error if prop isNaN', () => {
      const number = sinon.stub(PropTypes, 'number').callsFake(() => 'isNaN');

      const props = {
        min: 'min'
      };
      const propName = 'min';

      const error = propTypes.minMax(props, propName, 'Test');
      expect(number).to.have.callCount(1);
      expect(error).to.equal('isNaN');
    });

    it('should return error if min is greater than or equal to max', () => {
      const number = sinon.stub(PropTypes, 'number').callsFake(() => null);

      const props = {
        min: 2,
        max: 2
      };
      const propName = 'min';

      const error = propTypes.minMax(props, propName, 'Test');
      expect(number).to.have.callCount(1);
      expect(error.message).to.equal('min should be less than max');
    });

    it('should return error if max is less than or equal to min', () => {
      const number = sinon.stub(PropTypes, 'number').callsFake(() => null);

      const props = {
        min: 2,
        max: 2
      };
      const propName = 'max';

      const error = propTypes.minMax(props, propName, 'Test');
      expect(number).to.have.callCount(1);
      expect(error.message).to.equal('max should be greater than min');
    });
  });

  describe('valueInRange', () => {
    it('should return error if prop isNaN', () => {
      const number = sinon.stub(PropTypes, 'number').callsFake(() => 'isNaN');

      const props = {
        value: 'value'
      };
      const propName = 'value';

      const error = propTypes.valueInRange(props, propName, 'Test');
      expect(number).to.have.callCount(1);
      expect(error).to.equal('isNaN');
    });

    it('should return error if prop is not in range', () => {
      const number = sinon.stub(PropTypes, 'number').callsFake(() => null);

      const props = {
        value: 10,
        min: 1,
        max: 5
      };
      const propName = 'value';

      const error = propTypes.valueInRange(props, propName, 'Test');
      expect(number).to.have.callCount(1);
      expect(error.message).to.equal('value should be within the range specified by min and max');
    });
  });
});
