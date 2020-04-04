import { CHANGE_SEARCH_FIELD } from "./constants";

const initialState = {
  searchField: ""
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, { searchField: action.payload });
    // return { ...state, searchField: action.paload}
    default:
      return state;
  }
};
