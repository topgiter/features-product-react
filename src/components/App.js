import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mockData from '../mocks/two-products';
import Product from './product/Product';
import ColorStatus from './status/ColorStatus';
import { Container, Row } from 'reactstrap';
import './App.css';

const propTypes = {
  maxCol: PropTypes.number,
  classNames: PropTypes.object
};
const defaultProps = {
  maxCol: 10
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
    const alignTop = this.products.length % 3 === 0;
    const colorStatusNode =
      <ColorStatus
        classNames={classNames}
        alignTop={alignTop}
      />;

    return (
      <div className="featureApp">
        <Container>
          <Row>
            {this.products.map((p, i) =>
              <Product
                key={`product-${i}`}
                product={p.product}
                features={p.features}
                maxCol={maxCol}
                classNames={classNames}
              />
            )}
            {alignTop ? null : colorStatusNode}
          </Row>
          <Row>
            {alignTop ? colorStatusNode : null}
          </Row>
        </Container>
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
