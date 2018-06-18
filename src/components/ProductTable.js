import React, { Fragment, Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  render() {
    return (
      <Fragment>
        <h2>Name</h2>
        <ProductCategoryRow />
        <ProductRow />
      </Fragment>
    );
  }
}

export default ProductTable;
