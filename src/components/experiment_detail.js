import React, { Component } from 'react';
import retrieveJSON from './utils';


class ExperimentDetail extends Component {
  constructor(props) {
    super(props);

    this.state = { url: '' };

  };




  render() {

    if (!this.props.experiment) {
      return ( <div>Loading...</div> );
    } else {

      var url = ("https://raw.githubusercontent.com/" +
                 this.props.experiment.full_name +
                 "/master/experiment.json")
      console.log('url', url)
      var json = retrieveJSON(url)
      console.log('json', json)
      return (
        <div className="experiment-details col-md-8">
          <div>Experiment Name: {this.props.experiment.full_name}</div>
          <div>Url: <a href={this.props.experiment.html_url}>File</a></div>


          <div></div>
        </div>
      )}
  };
}


export default ExperimentDetail;
