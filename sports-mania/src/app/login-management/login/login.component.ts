import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { checkPattern } from 'src/app/shared/patter-constants';
import { constants } from 'src/app/shared/constants';
import { LoginServiceService } from 'src/app/login-management/services/login-service.service';
import { startWith, map, takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromLoginManagementStore from '../store';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  checkPattern = checkPattern;
  appLevelConstant = constants;
  isLoginDone: any;
  public ngUnsubscribe: Subject<void> = new Subject<void>();
  subscriptionStatus: any;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private loginServiceService: LoginServiceService,
    private loginManagementStore: Store<fromLoginManagementStore.LoginManagementDataState>,
    ) { }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('list-inventory');
    }
    this.loginForm = this.formBuilder.group(
      {
        userName: ['', [
          Validators.required,
          Validators.pattern(this.checkPattern.EMAIL_VALIDATION),
          Validators.minLength(3),
        ]],
        password: ['', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(250),

        ]],

      }
    );
  }

  login() {
    if (this.loginForm.status === this.appLevelConstant.VALID) {
      console.log("test", this.loginForm);
      this.loginServiceService.setUsername(this.loginForm.value.userName)
      this.authenticateUser()
    }
  }

  // Function to list department management table
  authenticateUser() {
    this.loginManagementStore.dispatch
      (new fromLoginManagementStore.LoginData());
    this.subscriptionStatus = this.loginManagementStore.select(fromLoginManagementStore.loadedLoginDataState).
      pipe(takeUntil(this.ngUnsubscribe)).subscribe((loaded) => {
        if (loaded) {
          this.subscriptionStatus = this.loginManagementStore.select(fromLoginManagementStore.loadLoginDataState).
            pipe(takeUntil(this.ngUnsubscribe)).subscribe((responseData) => {
              if(responseData.getToken()){
                this.router.navigateByUrl('list-inventory');
                localStorage.setItem('token',responseData.getToken());
              }
              this.isLoginDone = true;
            });
          if (this.isLoginDone) {
            this.subscriptionStatus.unsubscribe();
          }
        }
      });
    if (this.isLoginDone) {
      this.subscriptionStatus.unsubscribe();
    }
  }

}
