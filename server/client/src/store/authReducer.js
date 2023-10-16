import { FETCH_USER } from "./actions/types";

export const authReducer = (state = {}, action) => {
  console.log("REDUCER: actions:", action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
};
