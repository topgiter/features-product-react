import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  feature: PropTypes.object
};
const defaultProps = {
  className: 'gray'
};

class Feature extends Component {
  render() {
    const { className, feature } = this.props;

    return (
      <div className="feature-col">
        <div className="feature">
          {className}
        </div>
      </div>
    );
  }
}

Feature.propTypes = propTypes;
Feature.defaultProps = defaultProps;

export default Feature;
