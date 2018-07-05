import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import './ColorStatus.css';
import '../feature/Feature.css';

const propTypes = {
  classNames: PropTypes.object,
  alignTop: PropTypes.bool
};
const defaultProps = {
  alignTop: false
};

class ColorStatus extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classNames, alignTop } = this.props;

    return (
      <Col
        className="d-flex justify-content-end align-self-end"
        lg={{
          size: 4,
          offset: alignTop ? 8 : 0
        }}
      >
        <div className="color-status d-flex flex-column justify-content-start">
          {Object.keys(classNames).map(state_id =>
            <div className="color-status-item d-flex align-items-center" key={`color-status-item-${state_id}`}>
              <div className={`color-status-box feature-${classNames[state_id]}`}></div>
              <div className="color-status-value">&nbsp;:&nbsp;{state_id}</div>
            </div>
          )}
        </div>
      </Col>
    );
  }
}

ColorStatus.propTypes = propTypes;
ColorStatus.defaultProps = defaultProps;

export default ColorStatus;
