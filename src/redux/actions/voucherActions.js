import axios from "axios";
import api from "../../utils/api";
import {
  LOADING_VOUCHERS_START,
  LOAD_VOUCHERS_FAIL,
  LOAD_VOUCHERS_SUCCESS,
} from "./actionTypes";
import { returnError, returnSuccess } from "./alertActions";

export const loadVouchers = () => (dispatch, getState) => {
  dispatch({
    type: LOADING_VOUCHERS_START,
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
    .get("/house9/vouchers")
    .then((res) => {
      dispatch({
        type: LOAD_VOUCHERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOAD_VOUCHERS_FAIL,
      });
      console.log(err.response.data);
    });
};
