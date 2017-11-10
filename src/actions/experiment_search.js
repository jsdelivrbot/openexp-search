import GitHub from 'github-api';
import API_KEY from './api_key';
import constants from './constants';
var gh = new GitHub({token: API_KEY});


export default function experimentSearch(term) {
  const request = gh.search({q: `topic:exprxiv`,
  sort: 'stars', order: 'desc'}).forRepositories();

  return {
    type: constants.SEARCH_GITHUB,
    payload: request
  }
};
