import React, { Component } from 'react';
import find from 'lodash/find';
import noop from 'lodash/noop';
import Slider from '../../../dist/slider';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import Slider from 'anchor-ui/slider';
  \`\`\`
`;

const componentData = find(components, { displayName: 'Slider' });
const style = {
  paper: {
    margin: 0,
    padding: '20px'
  },
  slider: { margin: '0 10px 30px 10px' }
};

class SliderDoc extends Component {
  state = {
    value: 0,
    valueCustom: 50,
    valueStep: 0,
    valueDisabled: 0.5,
    valueError: 0
  }

  toggleSlider = (event) => {
    this.setState({
      value: parseInt(event.currentTarget.value, 10)
    });
  }

  toggleSliderCustom = (event) => {
    this.setState({
      valueCustom: parseInt(event.currentTarget.value, 10)
    });
  }

  toggleSliderStep = (event) => {
    this.setState({
      valueStep: parseInt(event.currentTarget.value, 10)
    });
  }

  toggleSliderError = (event) => {
    this.setState({
      valueError: parseInt(event.currentTarget.value, 10)
    });
  }

  render() {
    const {
      value,
      valueCustom,
      valueStep,
      valueDisabled,
      valueError
    } = this.state;

    return (
      <article className="page">
        <h1>Slider</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <Markdown markdown={usage} title="Code example" />
        <section>
          <h1>Examples</h1>
          <Paper style={style.paper}>
            <Slider
              onChange={this.toggleSlider}
              label="Default slider example (0-1)"
              name="slider"
              value={value}
              style={style.slider}
            />
            <Slider
              onChange={this.toggleSliderCustom}
              label="Min and max value example (0-100)"
              name="sliderCustom"
              min={0}
              max={100}
              value={valueCustom}
              style={style.slider}
            />
            <Slider
              onChange={this.toggleSliderStep}
              label="Step value example (20%)"
              name="sliderStep"
              min={0}
              max={100}
              step={20}
              value={valueStep}
              style={style.slider}
            />
            <Slider
              onChange={noop}
              label="Disabled example"
              name="sliderDisabled"
              value={valueDisabled}
              style={style.slider}
              disabled
            />
            <Slider
              onChange={this.toggleSliderError}
              label="Error example"
              name="sliderError"
              value={valueError}
              style={style.slider}
              error="Error message"
            />
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default SliderDoc;
