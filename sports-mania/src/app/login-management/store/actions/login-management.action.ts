import { Action } from '@ngrx/store';

export const LOGIN_DATA = 'LOGIN_DATA'; 
export const LOGIN_DATA_SUCCESS = 'LOGIN_DATA_SUCCESS';
export const LOGIN_DATA_FAIL = 'LOGIN_DATA_FAIL';

export class LoginData implements Action {
    readonly type = LOGIN_DATA;
    constructor() { }
}

export class LoginDataSuccess implements Action {
    readonly type = 'LOGIN_DATA_SUCCESS';
    constructor(public payload: any) { }
}

export class LoginDataFail implements Action {
    readonly type = LOGIN_DATA_FAIL;
    constructor(public payload: any) { }
}


export type LoginManagementAction = LoginData | LoginDataSuccess | LoginDataFail;
