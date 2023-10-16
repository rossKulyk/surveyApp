import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/current_user`);
      console.log("DATA:", data);
      dispatch({ type: FETCH_USER, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};
