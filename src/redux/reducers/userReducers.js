/* eslint-disable no-fallthrough */
import { 
    LOADING_USERS_START, 
    LOAD_USERS_FAIL, 
    LOAD_USERS_SUCCESS 
} from "../actions/actionTypes";


const initial_state = {
    users:[],
    isLoading:false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initial_state, action){
    switch (action.type) {
        case LOADING_USERS_START:
            return{
                ...state,
                isLoading:true,
            }
        case LOAD_USERS_SUCCESS:
            return{
                ...state,
                isLoading:false,
                users:action.payload.data
            }
        case LOAD_USERS_FAIL:
            return{
                ...state,
                isLoading:false,
            }
        default:
           return state;
    }
}