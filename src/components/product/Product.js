import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Feature from '../feature/Feature';
import './Product.css';

const propTypes = {
  product: PropTypes.object,
  features: PropTypes.array,
  maxCol: PropTypes.number,
  classNames: PropTypes.object
};
const defaultProps = {
  features: []
};

class Product extends Component {
  calcRows(total) {
    const minCols = Math.ceil(Math.sqrt(total));
    const { maxCol } = this.props;

    for (let i = minCols; i <= maxCol; i++) {
      if (total % i === 0) return total / i;
    }

    return Math.ceil(total / minCols);
  }

  render() {
    const { maxCol, classNames, features, product } = this.props;
    const filteredFeatures = features.filter(f => f.feature_type === 'feature');
    const sortedFeatures = filteredFeatures.sort((f1, f2) => f1.state_id - f2.state_id);
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
      <div className="product">
        {productNode}
        <div className="product-break-line"></div>
        <div className="product-name">{product.name}</div>
      </div>
    );
  }
}

Product.propTypes = propTypes;
Product.defaultProps = defaultProps;

export default Product;
