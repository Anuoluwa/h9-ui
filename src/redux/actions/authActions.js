import axios from "axios";
import api from "../../utils/api";
import {
  LOADING_ADMIN_LOGIN,
  LOADING_ADMIN_REGISTER,
  LOADING_ADMIN_START,
  LOAD_ADMIN_FAIL,
  LOAD_ADMIN_SUCCESS,
  LOGOUT_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_REGISTER_FAIL,
  ADMIN_REGISTER_SUCCESS,
} from "./actionTypes";
import { returnError, returnSuccess } from "./alertActions";

export const loadAdmin = () => (dispatch, getState) => {
  dispatch({
    type: LOADING_ADMIN_START,
  });

  // Get token from auth state
  const token = getState().auth.token;
  // console.log()

  // Header configuration
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  api
    .get(`/admins/me`, config)
    .then((res) => {
      console.log(res.data, "ftt");
      dispatch({
        type: LOAD_ADMIN_SUCCESS,
        payload: res.data,
      });
      // console.log(res.data)
    })
    .catch((err) => {
      dispatch({
        type: LOAD_ADMIN_FAIL,
      });
      console.log(err);
    });
};

export const login = (email, password) => (dispatch) => {
  dispatch({
    type: LOADING_ADMIN_LOGIN,
  });

  //Header Configuration
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  const body = { email, password };

  api
    .post(`/auth/login`, body, config)
    .then((res) => {
      dispatch({
        type: ADMIN_LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(loadAdmin());
      dispatch(returnSuccess("Logged In Successfully"));
    })
    .catch((err) => {
      dispatch({
        type: ADMIN_LOGIN_FAIL,
      });
      dispatch(returnError("Error occured"));
      console.log(err);
    });
};

// {
//     "firstName":"Onii",
//     "lastName":"Ife",
//     "mobile":"15001111345",
//     "email":"ooo4@hmail.com",
//     "password":"1pwdtest0"
// }

export const register =
  (email, password, firstName, lastName, mobile) => (dispatch) => {
    dispatch({
      type: LOADING_ADMIN_REGISTER,
    });

    //Header Configuration
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const body = { email, password, firstName, lastName, mobile };
    console.log(body);

    // console.log(`${api}/auth/signup`)

    api
      .post(`/auth/signup`, body, config)
      .then((res) => {
        dispatch({
          type: ADMIN_REGISTER_SUCCESS,
          payload: res.data,
        });
        dispatch(returnSuccess("Admin Registered Successfully"));
      })
      .catch((err) => {
        dispatch({
          type: ADMIN_REGISTER_FAIL,
        });
        dispatch(returnError("Error occured"));
        console.log(err);
      });
  };

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_SUCCESS,
  });
  dispatch(returnSuccess("Logged Out Successfully"));
};
