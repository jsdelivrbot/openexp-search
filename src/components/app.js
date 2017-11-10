import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import ExperimentList from '../containers/experiment_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ExperimentList />
      </div>
    );
  }
}
