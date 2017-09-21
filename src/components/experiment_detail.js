import React from 'react';

const ExperimentDetail = ({experiment}) => {

  if (!experiment) {
    return <div>Loading...</div>;
  }

  return (
    <div className="experiment-details col-md-8">
      <div>Experiment Name: {experiment.repository.full_name}</div>
      <div>Url: <a href={experiment.html_url}>File</a></div>
    </div>
  );
};

export default ExperimentDetail;
