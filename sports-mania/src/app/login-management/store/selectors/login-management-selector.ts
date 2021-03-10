import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromLoginData from '../reducers/login-management-reducer';

export const LoginDataState = createSelector(
    fromFeature.getCMSState,
    (state: fromFeature.LoginManagementDataState) => state.login_data
);

export const loadLoginDataState = createSelector(
    LoginDataState,
    fromLoginData.LoginDataStateData
);

export const loadingLoginDataState = createSelector(
    LoginDataState,
    fromLoginData.LoginDataStateDataLoading
);

export const loadedLoginDataState = createSelector(
    LoginDataState,
    fromLoginData.LoginDataLoaded
);
