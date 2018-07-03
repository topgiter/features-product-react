import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mockData from '../mocks/sample';
import './App.css';
import Feature from "./feature/Feature";

const propTypes = {
  maxCol: PropTypes.number,
  classNames: PropTypes.object
};
const defaultProps = {
  maxCol: 5
};

class App extends Component {
  calcRows(total) {
    const minCols = Math.ceil(Math.sqrt(total));
    const { maxCol } = this.props;

    for (let i = minCols; i <= maxCol; i++) {
      if (total % i === 0) return total / i;
    }

    return Math.ceil(total / minCols);
  }

  render() {
    const { maxCol, classNames } = this.props;
    const features = mockData.features.filter(f => f.FEATURE_TYPE === 'feature');
    const sortedFeatures = features.sort((f1, f2) => f1.state_id - f2.state_id);
    const countOfFeatures = sortedFeatures.length;
    const rows = countOfFeatures >= maxCol * maxCol ? Math.ceil(countOfFeatures / maxCol): this.calcRows(countOfFeatures);
    const cols = Math.ceil(countOfFeatures / rows);

    let productNode = [];
    for (let r = 0; r < rows; r++) {
      let rowNodes = [];
      for (let c = 0; c < cols; c++) {
        const index = r * cols + c;
        if (index >= countOfFeatures) {
          rowNodes.push(<div className="feature-col" key={`feature-${index}`}></div>);
        } else {
          const feature = sortedFeatures[index];
          rowNodes.push(
            <Feature
              key={`feature-${feature.id}`}
              className={classNames[feature.state_id]}
              feature={feature}
            />
          );
        }
      }

      productNode.push(
        <div key={`product-row-${r}`} className="feature-row">
          {rowNodes}
        </div>
      );
    }

    return (
      <div className="featureApp">
        {productNode}
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
