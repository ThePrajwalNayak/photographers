import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { SingupService } from './singup.service';

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
    emailMinLength: 5,
    emailMaxLength: 40,
    phoneNumberMinLength: 3,
    phoneNumberMaxLength: 20,
    locationMinLength: 3,
    locationMaxLength: 20,
    dobMinLength: 3,
    dobMaxLength: 20,
    sexMinLength: 3,
    sexMaxLength: 20,
    aboutMinLength: 100,
    aboutMaxLength: 500,
    socailLinkMinLength: 10,
    socailLinkMaxLength: 100,
    photoLinkMinLength: 5,
    photoLinkMaxLength: 100,
    videoLinkMinLength: 5,
    videoLinkMaxLength: 100,
  }
  photographer: any = {};
  profilePicture : any;
  base64textString = [];
  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private signUpService : SingupService) { }

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
      phoneNumber: ['', Validators.compose([Validators.maxLength(this.validation.phoneNumberMaxLength), Validators.minLength(this.validation.phoneNumberMinLength)])],
      location: ['', Validators.compose([Validators.maxLength(this.validation.locationMaxLength), Validators.minLength(this.validation.locationMinLength)])],
      dob: ['', Validators.compose([Validators.maxLength(this.validation.dobMaxLength), Validators.minLength(this.validation.dobMinLength)])],
      sex: ['', Validators.compose([Validators.maxLength(this.validation.sexMaxLength), Validators.minLength(this.validation.sexMinLength)])],
      about: ['', Validators.compose([Validators.required, Validators.maxLength(this.validation.aboutMaxLength), Validators.minLength(this.validation.aboutMinLength)])],
      linkFacebook: ['', Validators.compose([Validators.maxLength(this.validation.socailLinkMaxLength), Validators.minLength(this.validation.socailLinkMinLength)])],
      linkInstagram: ['', Validators.compose([Validators.maxLength(this.validation.socailLinkMaxLength), Validators.minLength(this.validation.socailLinkMinLength)])],
      linkTwitter: ['', Validators.compose([Validators.maxLength(this.validation.socailLinkMaxLength), Validators.minLength(this.validation.socailLinkMinLength)])],
      linkLinkedIn: ['', Validators.compose([Validators.maxLength(this.validation.socailLinkMaxLength), Validators.minLength(this.validation.socailLinkMinLength)])],
      photoLink: ['', Validators.compose([Validators.maxLength(this.validation.photoLinkMaxLength), Validators.minLength(this.validation.photoLinkMinLength)])],
      videoLink: ['', Validators.compose([Validators.maxLength(this.validation.videoLinkMaxLength), Validators.minLength(this.validation.videoLinkMinLength)])],
    });
  }

  importFile(event) {
    if (event.target.files.length == 0) {
      console.log("No file selected!");
      return
    }
    let file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
      // after here 'file' can be accessed and used for further process
    }
  }

  handleReaderLoaded(e) {
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
    this.profilePicture = this.base64textString;
  }
  createPhotographer(signupForm) {
    // var form = this.signupForm;
    // var reqObj = {
    //     username: form.get('username').value,
    //     profilePicture: form.get('profilePicture').value,
    //     password: 'password',
    //     firstName: form.get('firstName').value,
    //     lastName: form.get('lastName').value,
    //     email: form.get('email').value,    
    //     phoneNumber: form.get('phoneNumber').value,
    //     location : form.get('location').value,
    //     dob: form.get('dob').value,
    //     sex: form.get('sex').value == 'Male' ? 'M' : 'F',
    //     about: form.get('about').value,
    //     linkFacebook: form.get('linkFacebook').value,
    //     linkLinkedIn: form.get('linkLinkedIn').value,
    //     linkTwitter: form.get('linkTwitter').value,
    //     linkInstagram: form.get('linkInstagram').value,
    //     photoLink: form.get('photoLink').value,
    //     videoLink: form.get('videoLink').value
    // }
    var reqObj = JSON.parse(localStorage.getItem('req'));
    this.signUpService.createAccount(reqObj)
    .subscribe(data => {
      console.log(data);
      
    }, err => {
      console.log(err);
    });
  }
}
