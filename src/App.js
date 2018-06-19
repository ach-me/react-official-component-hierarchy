import React, { Component } from 'react';
import logo from './logo.svg';
import FilterableProductTable from './components/FilterableProductTable';
import './App.css';
import data from './sample-data';

class App extends Component {
  render() {
    return <FilterableProductTable products={data} />;
  }
}

export default App;
