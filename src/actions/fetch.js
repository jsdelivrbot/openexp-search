import GitHub from 'github-api';
import API_KEY from './api_key';
import constants from './constants';


export default function retrieveJSON(url) {
  const request = fetch(url);

  return {
    type: constants.RETRIEVE_JSON,
    payload: request
  }
};
