import constants from '../actions/constants';


export default function(state = [], action){
  switch (action.type) {
    case constants.SEARCH_GITHUB:
      // return state.concat([action.payload.data]); alternative
      return [ ...action.payload.data, ...state ];

    case constants.RETRIEVE_JSON:
      return [ action.payload.data, ...state ];

  }
  return state;
}
