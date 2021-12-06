import axios from "axios";
import api from "../../utils/api";
import {
  LOADING_USERS_START,
  LOAD_USERS_FAIL,
  LOAD_USERS_SUCCESS,
} from "./actionTypes";
import { returnError, returnSuccess } from "./alertActions";

export const loadUsers = () => (dispatch, getState) => {
  dispatch({
    type: LOADING_USERS_START,
  });

  // Get token from auth state
  const token = getState().auth.token;

  // config
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  api
    .get("/users", config)
    .then((res) => {
      dispatch({
        type: LOAD_USERS_SUCCESS,
        payload: res.data,
      });
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({
        type: LOAD_USERS_FAIL,
      });
      console.log(err.response.data);
    });
};
