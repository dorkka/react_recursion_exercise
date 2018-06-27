import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RecursiveComponent extends Component {

  static propTypes = {
    components: PropTypes.array,
  };

  _recursiveRender(components) {

    if (components.length === 0) {
      return null;
    }

    const Component = components[0];

    return <Component>
      {this._recursiveRender(components.slice(1))}
    </Component>
  }

  render() {
    return (
      <div>
        {this._recursiveRender(this.props.components)}
      </div>
    );
  }
};
