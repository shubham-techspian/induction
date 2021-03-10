import { Injectable } from '@angular/core';
import { createEffect , Actions, ofType } from '@ngrx/effects';
import * as loginData from '../actions/login-management.action';
import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoginServiceService } from '../../services/login-service.service';
import {LoginDataSuccess} from '../actions/login-management.action';

// const _loginData: any = loginData;
@Injectable()

export class LoginDataEffects {
    constructor(
        private actions$: Actions,
        private LoginDataService: LoginServiceService,
    ) { }

    authenticateLoginData$ = createEffect(
    () => this.actions$
        .pipe(
            ofType<loginData.LoginData>(loginData.LOGIN_DATA),
            switchMap((action) => {
                return this.LoginDataService.authenticateUser().pipe(
                    map(LoginData => new LoginDataSuccess(LoginData)),
                    catchError(error => of(new loginData.LoginDataFail(error)))
                );
            })
        )
    )
}
