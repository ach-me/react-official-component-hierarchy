import React, { Fragment } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = () => (
  <Fragment>
    <SearchBar />
    <ProductTable />
  </Fragment>
);

export default FilterableProductTable;
