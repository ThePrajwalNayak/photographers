import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  photographer: any = {};

  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initSignupForm();
  }

  initSignupForm() {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
      profilePicture: [''],
      password: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(5)])],
      firstName: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
      lastName: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(2)])],
      email: ['', Validators.compose([Validators.required, Validators.maxLength(30), Validators.minLength(5)])],
      phoneNumber: ['', Validators.compose([Validators.maxLength(15), Validators.minLength(5)])],
      location: ['', Validators.compose([Validators.maxLength(20), Validators.minLength(2)])],
      dob: ['', Validators.compose([Validators.maxLength(20), Validators.minLength(5)])],
      sex: ['', Validators.compose([Validators.maxLength(1), Validators.minLength(1)])],
      about: ['', Validators.compose([Validators.required, Validators.maxLength(500), Validators.minLength(50)])],
      linkFacebook: ['', Validators.compose([Validators.maxLength(50), Validators.minLength(10)])],
      linkInstagram: ['', Validators.compose([Validators.maxLength(50), Validators.minLength(10)])],
      linkTwitter: ['', Validators.compose([Validators.maxLength(50), Validators.minLength(10)])],
      linkLinkedIn: ['', Validators.compose([Validators.maxLength(50), Validators.minLength(10)])],
      photoLink: ['', Validators.compose([Validators.maxLength(100), Validators.minLength(5)])],
      videoLink: ['', Validators.compose([Validators.maxLength(100), Validators.minLength(5)])],
    });
  }

  createPhotographer(signupForm: NgForm) {
    console.log(signupForm.controls);
  }
}
