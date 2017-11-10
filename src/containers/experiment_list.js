import React, { Component } from 'react';
import { connect } from 'react-redux';
import retrieveJSON from '../actions/fetch';

class ExperimentList extends Component {
  renderExperiment(experiment) {

    const name = experiment.name;
    const description = experiment.description;
    const url = experiment.html_url;
    const id = experiment.id;

    return (
      <tr key={id}>
        <td>{name}</td>
        <td>{description}</td>
        <td><a href={experiment.html_url}>GitHub</a></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {this.props.experiment.map(this.renderExperiment)}
        </tbody>
      </table>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ retrieveJSON }, dispatch);
}

function mapStateToProps({ experiment }) { // { weather } === state.weather
  return { experiment }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(ExperimentList);
