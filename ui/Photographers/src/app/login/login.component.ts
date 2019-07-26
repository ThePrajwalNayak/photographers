import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  errorMessage: any = {
    required: 'Required',
    minlength: 'Min length is',
    maxLength: 'Max length is'
  }

  validation: any = {
    usernameMinLength: 5,
    usernameMaxLength: 20,
    passwordMinLength: 5,
    passwordMaxLength: 20
  }

  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private router: Router,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.maxLength(this.validation.usernameMaxLength), Validators.minLength(this.validation.usernameMinLength)])],
      password: ['', Validators.compose([Validators.required, Validators.maxLength(this.validation.passwordMaxLength), Validators.minLength(this.validation.passwordMinLength)])],
    });
  }

  validatePhotographers(loginForm) {
    if (loginForm.status === 'VALID') {
      var reqObj = {
        username: loginForm.get('username').value,
        password: loginForm.get('password').value,
      }
      this.loginService.validatePhotographers(reqObj)
        .subscribe((data: any) => {
          if (data.photographersId) {
            this.initLoginForm();
            this.toastrService.success('Hurray', 'Loged in successfully', {
              disableTimeOut: true
            });
          } else {
            this.toastrService.error('Better luck next time', 'Wrong username or password.', {
              disableTimeOut: true
            });
          }
        }, err => {
          this.toastrService.error('Better luck next time', 'Wrong username or password.', {
            disableTimeOut: true
          });
        });
    }
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }

  revert() {
    this.loginForm.reset();
  }

}
