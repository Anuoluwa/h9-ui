/* eslint-disable import/no-anonymous-default-export */
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
    ADMIN_REGISTER_SUCCESS
} from "../actions/actionTypes";


const initialState = {
    token:localStorage.getItem('token'),
    isAuthenticated: localStorage.getItem('token')&&true,
    isLoading:false,
    admin:null,
}



export default function(state=initialState, action){
    switch(action.type){
        case LOADING_ADMIN_START:
        case LOADING_ADMIN_LOGIN:
        case LOADING_ADMIN_REGISTER:
            return{
                ...state,
                isLoading:true
            }
        case LOAD_ADMIN_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isAuthenticated:true,
                admin:action.payload.data,
                ...action.payload
            }
        case ADMIN_LOGIN_SUCCESS:
        case ADMIN_REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                isLoading:false,
                isAuthenticated:true,
                admin:action.payload.data,
                ...action.payload
            }
        case LOAD_ADMIN_FAIL:
        case ADMIN_LOGIN_FAIL:
        case ADMIN_REGISTER_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token')
            return{
                ...state,
                isLoading:false,
                isAuthenticated:false
            }
        default:
            return state;
    }

}

