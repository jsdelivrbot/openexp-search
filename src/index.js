import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GitHub from 'github-api';

import SearchBar from './components/search_bar';
import ExperimentList from './components/experiment_list';
import ExperimentDetail from './components/experiment_detail';
import Button from './components/launcher_button';

var gh = new GitHub({token: API_KEY});

// var Search = gh.search({q: `experiment.json in:path`,
//                sort: 'stars',
//                order: 'desc',}).forCode().then(test => {console.log('content', test) })
// Create a new component. This component should produce some html

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
    gh.search({q: `experiment.json in:path; ${term} in:file`,
               sort: 'stars',
               order: 'desc',}).forCode().then(experiments => {
                 console.log('experiment', experiments['data'][0]);
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
        <ExperimentDetail experiment={this.state.selectedExperiment} />
        <Button />
        <ExperimentList
          onExperimentSelect={selectedExperiment => this.setState({selectedExperiment})}
          experiments={this.state.experiments} />
      </div>
    );

  }


}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
