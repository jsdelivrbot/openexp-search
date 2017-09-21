import React from 'react';
import ExperimentListItem from './experiment_list_item';


const ExperimentList = (props) => {
  const experimentItems = props.experiments.map((experiment) => {
    return <ExperimentListItem
      onExperimentSelect={props.onExperimentSelect}
      key={experiment.sha}
      experiment={experiment} />
  });

  return (
    <ul className="col-md-4 list-group">
      {experimentItems}
    </ul>
  );
};

export default ExperimentList;
