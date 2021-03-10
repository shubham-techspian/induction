import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';

import * as fromLoginData from './login-management-reducer';
import { environment } from 'src/environments/environment';
export interface LoginManagementDataState {
    login_data: fromLoginData.LoginDataState;
}
export const reducers: ActionReducerMap<LoginManagementDataState> = {
    login_data: fromLoginData.reducer,
  };
export const metaReducers: MetaReducer<LoginManagementDataState>[] = !environment.production ? [] : [];
export const getCMSState = createFeatureSelector<LoginManagementDataState>('loginManagementData');
