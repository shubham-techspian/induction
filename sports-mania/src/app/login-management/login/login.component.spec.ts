import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginServiceService } from 'src/app/login-management/services/login-service.service';
import * as fromLoginManagementStore from '../store';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { of } from 'rxjs';
import { LoginManagementDataState } from '../store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('LoginComponent', () => {
  let store: MockStore<LoginManagementDataState>;
  let htmlData: DebugElement;
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService

  beforeEach(async () => {

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule,
        CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
      ],
      providers: [LoginServiceService, provideMockStore({
        initialState: {
        }
      })],
    });

    // fixture = TestBed.createComponent(LoginComponent);
    // component = fixture.componentInstance;
    // htmlData = fixture.debugElement;
  });

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    loginService = TestBed.inject(LoginServiceService);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    htmlData = fixture.debugElement;
    fixture.detectChanges();
    // component = new LoginComponent(
    //   routerMock,
    //   formBuilderMock,
    //   loginServiceServiceMock,
    //   loginManagementStoreMock,
    // );

  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('login variable should be initialized to false', () => {
    expect(component.isLoginDone).toEqual(false);
  });
  it('it should call create form function', () => {
    const createFormSpy = jest.spyOn(component, 'createForm');
    component.ngOnInit();
    expect(createFormSpy).toBeCalled();
  });
  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let errors = {};
    const userName = component.loginForm.controls['userName'];
    errors = userName.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('password field valid data', () => {
    let errors = {};
    // component.loginForm.controls.userName.setValue('sdsd@#sds.com')
    const password = component.loginForm.controls['password'];
    password.patchValue('sdsds@sdsd.com');
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  it('password field valid data', () => {
    let errors = {};
    // component.loginForm.controls.userName.setValue('sdsd@#sds.com')
    const password = component.loginForm.controls['password'];
    password.patchValue('sdsds@sdsd.com');
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  it('set login service function with username value', () => {
    const username = 'kjdksjd';
    const setUsernameInLoginSpy = jest.spyOn(loginService, 'setUsername')
    loginService.setUsername(setUsernameInLoginSpy);
    expect(setUsernameInLoginSpy).toBeCalledWith(setUsernameInLoginSpy);
  });

});

// import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { RouterTestingModule } from '@angular/router/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { HomePageComponent } from './home-page.component';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatSelectModule } from '@angular/material/select';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { ClientService } from '../../services/client.service';
// import { DashboardService } from './dashboard.service';
// import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
// import { Link } from '../../user/login-user';
// import { of } from 'rxjs';
// import { AppContextService } from '../../services/app-context.service';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { DirectiveModule } from '../../directive/directive.module';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatButtonModule } from '@angular/material/button';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



// describe('HomePageComponent', () => {
//   let component: HomePageComponent;
//   let fixture: ComponentFixture<HomePageComponent>;
//   let dashboardService;
//   const locationStub = {
//     back: jest.fn()
//   };

//   const mockRouter = {
//     navigate: jest.fn()
//   }

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [HomePageComponent],
  //     imports: [FormsModule,
  //       CommonModule,
  //       BrowserModule,
  //       ReactiveFormsModule,
  //       RouterTestingModule,
  //       BrowserAnimationsModule,
  //       HttpClientTestingModule,
  //       MatFormFieldModule,
  //       MatSelectModule,
  //       MatGridListModule,
  //       MatTooltipModule,
  //       DirectiveModule,
  //       MatDividerModule,
  //       MatButtonModule,
  //       MatProgressSpinnerModule
  //     ],
  //     providers: [
  //       ClientService,
  //       { provide: Router, useValue: router },
  //       DashboardService,
  //       AppContextService
  //     ]
  //   })
  //     .compileComponents();
  // });

  // beforeEach(inject([DashboardService], s => {
  //   dashboardService = s;
  //   fixture = TestBed.createComponent(HomePageComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });