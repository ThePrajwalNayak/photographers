import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  errorMessage: any = {
    required: 'Required',
    minlength: 'Min length is',
    maxLength: 'Max length is'
  }
  validation: any = {
    usernameMinLength: 5,
    usernameMaxLength: 20,
    passwordMinLength: 5,
    passwordMaxLength: 20,
    firstNameMinLength: 3,
    firstNameMaxLength: 20,
    lastNameMinLength: 3,
    lastNameMaxLength: 20,
    emailMinLength: 3,
    emailMaxLength: 20,
    phoneNumberMinLength: 3,
    phoneNumberLength: 20,
    locationMinLength: 3,
    locationMaxLength: 20,
    dobMinLength: 3,
    dobMaxLength: 20,
    sexMinLength: 3,
    sexMaxLength: 20,
    aboutMinLength: 3,
    aboutMaxLength: 20,
    socailLinkMinLength: 10,
    socailLinkMaxLength: 50,
    photoLinkMinLength: 5,
    photoLinkMaxLength: 100,
    videoLinkMinLength: 5,
    videoLinkMaxLength: 100,
  }
  photographer: any = {};

  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initSignupForm();
  }

  initSignupForm() {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.maxLength(this.validation.usernameMaxLength), Validators.minLength(this.validation.usernameMinLength)])],
      profilePicture: [''],
      password: ['', Validators.compose([Validators.required, Validators.maxLength(this.validation.passwordMaxLength), Validators.minLength(this.validation.passwordMinLength)])],
      firstName: ['', Validators.compose([Validators.required, Validators.maxLength(this.validation.firstNameMaxLength), Validators.minLength(this.validation.firstNameMinLength)])],
      lastName: ['', Validators.compose([Validators.required, Validators.maxLength(this.validation.lastNameMaxLength), Validators.minLength(this.validation.lastNameMinLength)])],
      email: ['', Validators.compose([Validators.required, Validators.maxLength(this.validation.emailMaxLength), Validators.minLength(this.validation.emailMinLength)])],
      phoneNumber: ['', Validators.compose([Validators.maxLength(this.validation.passwordMaxLength), Validators.minLength(this.validation.passwordMinLength)])],
      location: ['', Validators.compose([Validators.maxLength(this.validation.lastNameMaxLength), Validators.minLength(this.validation.locationMinLength)])],
      dob: ['', Validators.compose([Validators.maxLength(this.validation.dobMaxLength), Validators.minLength(this.validation.dobMinLength)])],
      sex: ['', Validators.compose([Validators.maxLength(this.validation.sexMaxLength), Validators.minLength(this.validation.sexMinLength)])],
      about: ['', Validators.compose([Validators.required, Validators.maxLength(this.validation.aboutMaxLength), Validators.minLength(this.validation.aboutMinLength)])],
      linkFacebook: ['', Validators.compose([Validators.maxLength(this.validation.socailLinkMaxLength), Validators.minLength(this.validation.socailLinkMinLength)])],
      linkInstagram: ['', Validators.compose([Validators.maxLength(this.validation.socailLinkMaxLength), Validators.minLength(this.validation.socailLinkMinLength)])],
      linkTwitter: ['', Validators.compose([Validators.maxLength(this.validation.socailLinkMaxLength), Validators.minLength(this.validation.socailLinkMinLength)])],
      linkLinkedIn: ['', Validators.compose([Validators.maxLength(this.validation.socailLinkMaxLength), Validators.minLength(this.validation.socailLinkMinLength)])],
      photoLink: ['', Validators.compose([Validators.maxLength(this.validation.photoLinkMinLength), Validators.minLength(this.validation.photoLinkMinLength)])],
      videoLink: ['', Validators.compose([Validators.maxLength(this.validation.videoLinkMaxLength), Validators.minLength(this.validation.videoLinkMaxLength)])],
    });
  }

  createPhotographer(signupForm: NgForm) {
    console.log(signupForm.controls);
  }
}
