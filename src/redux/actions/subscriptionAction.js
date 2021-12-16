import axios from "axios";
import api from "../../utils/api";
import {
  LOADING_SUBSCRIPTIONS_START,
  LOAD_SUBSCRIPTIONS_FAIL,
  LOAD_SUBSCRIPTIONS_SUCCESS,
  EDIT_SUBSCRIPTIONS_START,
  EDIT_SUBSCRIPTIONS_FAIL,
  EDIT_SUBSCRIPTIONS_SUCCESS,
  EDIT_PAYMENT_START,
  EDIT_PAYMENT_FAIL,
  EDIT_PAYMENT_SUCCESS,
} from "./actionTypes";
import { returnError, returnSuccess } from "./alertActions";
import { toast } from "react-toastify";

export const loadSubscriptions = () => (dispatch, getState) => {
  dispatch({
    type: LOADING_SUBSCRIPTIONS_START,
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
    .get("/subscriptions", config)
    .then((res) => {
      dispatch({
        type: LOAD_SUBSCRIPTIONS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOAD_SUBSCRIPTIONS_FAIL,
      });
      console.log(err.response.data);
    });
};


export const editSubscriptions = (formData, id) => (dispatch, getState) => {
  dispatch({
      type:EDIT_SUBSCRIPTIONS_START
  })

  // Get token from auth state
  const token = getState().auth.token;

  // config
  const config = {
      headers:{
          "Content-Type":"application/json"
      }
  }

  if(token){
      config.headers["Authorization"] = `Bearer ${token}`
  }

  const body = {"totalAmount": formData}


  api.put(`/subscriptions/${id}/expenses`, body, config)
      .then((res) => {
          dispatch({
              type:EDIT_SUBSCRIPTIONS_SUCCESS,
              payload:res.data,
          });
          dispatch(returnSuccess("Expenses Updated Successfully"))
          dispatch(loadSubscriptions())
          console.log(res.data)
      })
      .catch((err) => {
          dispatch({
              type:EDIT_SUBSCRIPTIONS_FAIL
          });
          dispatch(returnError("Error Occured"))
          console.log(err.response);
      })
}



export const makePayment = (formData, id) => (dispatch, getState) => {
  dispatch({
      type:EDIT_PAYMENT_START
  })

  // Get token from auth state
  const token = getState().auth.token;

  // config
  const config = {
      headers:{
          "Content-Type":"application/json"
      }
  }

  if(token){
      config.headers["Authorization"] = `Bearer ${token}`
  }

  const body = {"amount": formData}


  api.put(`/subscriptions/${id}/payment`, body, config)
      .then((res) => {
          dispatch({
              type:EDIT_PAYMENT_SUCCESS,
              payload:res.data,
          });
          dispatch(returnSuccess("Payment Updated Successfully"))
          dispatch(loadSubscriptions())
      })
      .catch((err) => {
          dispatch({
              type:EDIT_PAYMENT_FAIL
          });
          dispatch(returnError("Error Occured"))
          // console.log('pay-err', err.response);
      })
}




// export const editProduct = (productName, description, composition, approvedProductNo, expirationDate, costPerUnit, category, supplier_id) => (dispatch, getState) => {
//   dispatch({
//       type:ADDING_PRODUCTS_START
//   })

//   // Get token from auth state
//   const token = getState().auth.token;

//   console.log(token)

//   // config
//   const config = {
//       headers:{
//           "Content-Type":"application/json"
//       }
//   }

//   if(token){
//       config.headers["Authorization"] = `Bearer ${token}`
//   }

//   const body =({productName, description, composition, approvedProductNo, expirationDate, costPerUnit, category, supplier:supplier_id})

//   console.log(body)

//   axios.put(`${BASE_URL}/products`, body, config)
//       .then((res) => {
//           dispatch({
//               type:ADD_PRODUCTS_SUCCESS,
//               payload:res.data,
//           });
//           // dispatch(returnSuccess("Product Added Successfully"))
//           // dispatch(loadProducts())
//           console.log(res.data)
//       })
//       .catch((err) => {
//           dispatch({
//               type:ADD_PRODUCTS_FAIL
//           });
//           dispatch(returnError("Error Occured"))
//           console.log(err.response.data);
//       })
// }