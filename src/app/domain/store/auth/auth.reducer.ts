
import { createReducer, on, Action } from "@ngrx/store";
import * as authActions from './auth.actions';
import { AuthState } from "./auth.state";

export const initialAuthState: AuthState = {
    loginData: null,
    isLiading: false,
    isError: null
}

export const authReducerInternal = createReducer(
    initialAuthState,
    on( authActions.loginAction, (state, {data}) => {
        return {
            ...state,
            loginData: data,
            isLiading: true,
            isError: null
        }
    }),
    on( authActions.loginSuccessAction, (state) =>{
        return {
            ...state,
            isLiading: false
        }
    }),
    on( authActions.loginErrorAction, (state, {message}) =>{
        return {
            ...state,
            isLiading: false,
            isError: message
        }
    })
) 

export function autReducer(state: AuthState | undefined, action: Action){
 return authReducerInternal(state, action)   
}