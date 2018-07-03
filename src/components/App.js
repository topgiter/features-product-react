import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mockData from '../mocks/two-products';
import Product from './product/Product';
import './App.css';

const propTypes = {
  maxCol: PropTypes.number,
  classNames: PropTypes.object
};
const defaultProps = {
  maxCol: 5
};

class App extends Component {
  constructor(props) {
    super(props);

    this.products = [];
    this.currentProductFeatures = [];
    for (let i = 0; i < mockData.features.length; i++) {
      const f = mockData.features[i];
      if (f.feature_type === 'product') {
        this.currentProductFeatures = [];
        this.collectFeatures(f);
        this.products.push({
          product: f,
          features: this.currentProductFeatures
        });
      }
    }
  }

  collectFeatures(feature) {
    this.currentProductFeatures.push(feature);

    for (let i = 0; i < mockData.features.length; i++) {
      const f = mockData.features[i];
      if (f.parent_id === feature.id) {
        this.collectFeatures(f);
      }
    }
  }

  render() {
    const { maxCol, classNames } = this.props;

    return (
      <div className="featureApp">
        {this.products.map((p, i) =>
          <Product
            key={`product-${i}`}
            product={p.product}
            features={p.features}
            maxCol={maxCol}
            classNames={classNames}
          />
        )}
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
