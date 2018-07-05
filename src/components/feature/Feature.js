import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { UncontrolledTooltip } from 'reactstrap';
import './Feature.css';

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
    const featureClassName = 'feature feature-' + className;
    return (
      <div className="feature-col">
        <div className={featureClassName} id={`feature-tooltip-${feature.id}`}>
        </div>
        <UncontrolledTooltip placement="top" target={`feature-tooltip-${feature.id}`}>
          {feature.name}
        </UncontrolledTooltip>
      </div>
    );
  }
}

Feature.propTypes = propTypes;
Feature.defaultProps = defaultProps;

export default Feature;
