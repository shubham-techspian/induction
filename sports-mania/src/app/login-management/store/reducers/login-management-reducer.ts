import * as fromLoginData from '../actions/login-management.action';
import { LoginDataModel } from '../../models';

export interface LoginDataState {
    isLoginDataLoading: boolean;
    isLoginDataLoaded: boolean;
    loginData: LoginDataModel;
}

export const initialState: LoginDataState = {
    isLoginDataLoading: false,
    isLoginDataLoaded: false,
    loginData: new LoginDataModel(),
};

export function reducer(
    state = initialState,
    action: fromLoginData.LoginManagementAction):
    LoginDataState {
    switch (action.type) {

        case fromLoginData.LOGIN_DATA: {
            return {
                ...state,
                isLoginDataLoading: true,
                isLoginDataLoaded: false,
            };
        }

        case fromLoginData.LOGIN_DATA_SUCCESS: {
            const data = new LoginDataModel();
            console.log(action.payload)
            data.setId(action.payload.id);
            data.setToken(action.payload.token);
            return {
                ...state,
                isLoginDataLoading: false,
                isLoginDataLoaded: true,
                loginData: data,
            };
        }

        case fromLoginData.LOGIN_DATA_FAIL: {
            return {
                ...state,
                isLoginDataLoading: false,
                isLoginDataLoaded: true,
            };
        }

    }
    return state;
}

export const LoginDataLoaded = (state: LoginDataState) => state.isLoginDataLoaded;
export const LoginDataStateDataLoading = (state: LoginDataState) => state.isLoginDataLoading;
export const LoginDataStateData = (state: LoginDataState) => state.loginData;

