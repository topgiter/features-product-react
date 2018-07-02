import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        <div className={featureClassName}>
          <div><span>Name:</span><b>{feature.name}</b></div>
          <div><span>ParentId:{feature.parent_id}</span></div>
          <div><span>OwnerId:{feature.owner_id}</span></div>
          <div><span>StateId:</span><i>{feature.state_id}</i></div>
          <div><span>...</span></div>
        </div>
      </div>
    );
  }
}

Feature.propTypes = propTypes;
Feature.defaultProps = defaultProps;

export default Feature;
