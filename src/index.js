import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GitHub from 'github-api';

import SearchBar from './components/search_bar';
import ExperimentList from './components/experiment_list';
import ExperimentDetail from './components/experiment_detail';
import Button from './components/launcher_button';

const API_KEY = '8ee23e14f1db6066aa6e766b3ba3c91600a83c04'
var gh = new GitHub({token: API_KEY});


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      experiments : [],
      selectedExperiment: null
    };

    this.experimentSearch('reaction');

  }

  experimentSearch(term) {
    gh.search({q: `topic:exprxiv`,
               sort: 'stars',
               order: 'desc',}).forRepositories().then(experiments => {
                 this.setState({
                   experiments: experiments['data'].slice(0, 10),
                   selectedExperiment: experiments['data'][0]
                 });
               });
             };

  render() {
    const experimentSearch = _.debounce((term) => { this.experimentSearch(term) }, 2000);

    return (
      <div>
        <SearchBar onSearchTermChange={experimentSearch}/>
        <Button />
        <ExperimentDetail experiment={this.state.selectedExperiment} />
        <ExperimentList
          onExperimentSelect={selectedExperiment => this.setState({selectedExperiment})}
          experiments={this.state.experiments} />
      </div>
    );

  }


}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
