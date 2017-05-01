import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Slider from '../../../dist/slider';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Slider from \'anchor-ui/slider\';';

class SliderDoc extends Component {
  constructor() {
    super();

    this.state = {
      valueDefault: 0,
      valueCustom: 50,
      valueStep: 0,
      valueDisabled: 0.5,
      valueError: 0
    };

    this.toggleSliderDefault = this.toggleSliderDefault.bind(this);
    this.toggleSliderCustom = this.toggleSliderCustom.bind(this);
    this.toggleSliderStep = this.toggleSliderStep.bind(this);
    this.toggleSliderError = this.toggleSliderError.bind(this);
  }

  toggleSliderDefault(event) {
    this.setState({
      valueDefault: parseInt(event.currentTarget.value, 10)
    });
  }

  toggleSliderCustom(event) {
    this.setState({
      valueCustom: parseInt(event.currentTarget.value, 10)
    });
  }

  toggleSliderStep(event) {
    this.setState({
      valueStep: parseInt(event.currentTarget.value, 10)
    });
  }

  toggleSliderError(event) {
    this.setState({
      valueError: parseInt(event.currentTarget.value, 10)
    });
  }

  render() {
    const componentData = _.find(components, component => component.displayName === 'Slider');
    const style = {
      paper: {
        margin: 0,
        padding: '20px' },
      slider: { margin: '0 10px 30px 10px' }
    };

    return (
      <article className="doc">
        <h1>Slider</h1>
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
          <Paper style={style.paper}>
            <Slider
              onChange={this.toggleSliderDefault}
              label="Default slider example (0-1)"
              name="sliderDefault"
              value={this.state.valueDefault}
              style={style.slider}
            />
            <Slider
              onChange={this.toggleSliderCustom}
              label="Min and max value example (0-100)"
              name="sliderCustom"
              min={0}
              max={100}
              value={this.state.valueCustom}
              style={style.slider}
            />
            <Slider
              onChange={this.toggleSliderStep}
              label="Step value example (20%)"
              name="sliderStep"
              min={0}
              max={100}
              step={20}
              value={this.state.valueStep}
              style={style.slider}
            />
            <Slider
              onChange={() => {}}
              label="Disabled example"
              name="sliderDisabled"
              value={this.state.valueDisabled}
              style={style.slider}
              disabled
            />
            <Slider
              onChange={this.toggleSliderError}
              label="Error example"
              name="sliderError"
              value={this.state.valueError}
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
