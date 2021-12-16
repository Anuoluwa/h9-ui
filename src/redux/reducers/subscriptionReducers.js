/* eslint-disable no-fallthrough */
import {
  LOADING_SUBSCRIPTIONS_START,
  LOAD_SUBSCRIPTIONS_FAIL,
  LOAD_SUBSCRIPTIONS_SUCCESS,
  EDIT_SUBSCRIPTIONS_FAIL,
  EDIT_SUBSCRIPTIONS_SUCCESS,
  EDIT_SUBSCRIPTIONS_START,
  EDIT_PAYMENT_FAIL,
  EDIT_PAYMENT_SUCCESS,
  EDIT_PAYMENT_START
  
} from "../actions/actionTypes";

const initial_state = {
  subscriptions: [],
  updated_subcription : {},
  payment_subcription : {},
  isLoading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initial_state, action) {
  switch (action.type) {
    case LOADING_SUBSCRIPTIONS_START:
    case EDIT_SUBSCRIPTIONS_START:
    case EDIT_PAYMENT_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_SUBSCRIPTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        subscriptions: action.payload.data,
      };
    case    EDIT_SUBSCRIPTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        updated_subcription: action.payload.data,
      };
    case    EDIT_PAYMENT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          payment_subcription: action.payload.data,
        };
    case LOAD_SUBSCRIPTIONS_FAIL:
    case EDIT_SUBSCRIPTIONS_FAIL:
    case EDIT_PAYMENT_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
