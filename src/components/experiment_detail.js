import React from 'react';

const ExperimentDetail = ({experiment}) => {

  if (!experiment) {
    return <div>Loading...</div>;
  }

  fetch(experiment.url).then( request => {
    return request.json()
  }).then( json => {
    console.log('request', json);
    console.log('path', json['download_url']);
  });

  return (
    <div className="experiment-details col-md-8">
      <div>Experiment Name: {experiment.repository.full_name}</div>
      <div>Url: <a href={experiment.url}>File</a></div>

      <div></div>
    </div>
  );
};

export default ExperimentDetail;
