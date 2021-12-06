/* eslint-disable no-fallthrough */
import { 
    LOADING_VOUCHERS_START, 
    LOAD_VOUCHERS_FAIL, 
    LOAD_VOUCHERS_SUCCESS 
} from "../actions/actionTypes";


const initial_state = {
    vouchers:[],
    isLoading:false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initial_state, action){
    switch (action.type) {
        case LOADING_VOUCHERS_START:
            return{
                ...state,
                isLoading:true,
            }
        case LOAD_VOUCHERS_SUCCESS:
            return{
                ...state,
                isLoading:false,
                vouchers:action.payload.data
            }
        case LOAD_VOUCHERS_FAIL:
            return{
                ...state,
                isLoading:false,
            }
        default:
           return state;
    }
}