import { combineReducers } from "redux";
import authReducers from "./authReducers";
import userReducers from "./userReducers";
import voucherReducers from './voucherReducers';
import subscriptionReducers from "./subscriptionReducers";


export default combineReducers({
   auth:authReducers,
   user: userReducers,
   voucher: voucherReducers,
   subscription: subscriptionReducers
})