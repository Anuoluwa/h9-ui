import { combineReducers } from "redux";
import authReducers from "./authReducers";
import userReducers from "./userReducers";
import voucherReducers from './voucherReducers';


export default combineReducers({
   auth:authReducers,
   user: userReducers,
   voucher: voucherReducers
})