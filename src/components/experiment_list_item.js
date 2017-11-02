import React from 'react';


const ExperimentListItem = ({experiment, onExperimentSelect}) => {

  return (
    <li onClick= {() => onExperimentSelect(experiment)} className="list-group-item">
      <div className="experiment-list media">
        <div className="media-left">
          <img className="media-object" src='../../img/logo.png' width='50'/>
        </div>
      </div>

      <div className="media-body">
        <div className="media-heading">{experiment.full_name}</div>
      </div>
    </li>
  )
};

export default ExperimentListItem;
