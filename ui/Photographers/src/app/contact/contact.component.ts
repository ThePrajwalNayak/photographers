import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
declare var $: any;
import { ContactService } from './contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  contactCategory = ["Request", "Complain"];
  defaultContactCategory = this.contactCategory[0];

  errorMessage: any = {
    required: 'Required',
    minlength: 'Min length is',
    maxLength: 'Max length is'
  }

  validation: any = {
    nameMinLength: 5,
    nameMaxLength: 30,
    emailMinLength: 5,
    emailMaxLength: 30,
    mobileMinLength: 5,
    mobileMaxLength: 30,
    messageMinLength: 5,
    messageMaxLength: 500,
  }

  response: any;

  constructor(private formBuilder: FormBuilder, private contactService: ContactService, private toastrService: ToastrService) { 
    
  }

  ngOnInit() {
    this.initContactForm();
  }

  initContactForm() {

    this.contactForm = this.formBuilder.group({
      contactCategory: [ this.defaultContactCategory, Validators.compose([Validators.required])],
      fullName: ['', Validators.compose([Validators.required, Validators.maxLength(this.validation.nameMaxLength), Validators.minLength(this.validation.nameMinLength)])],
      email: ['', Validators.compose([Validators.required, Validators.maxLength(this.validation.emailMaxLength), Validators.minLength(this.validation.emailMinLength)])],
      mobile: ['', Validators.compose([Validators.required, Validators.maxLength(this.validation.mobileMaxLength), Validators.minLength(this.validation.mobileMinLength)])],
      message: ['', Validators.compose([Validators.required, Validators.maxLength(this.validation.messageMaxLength), Validators.minLength(this.validation.messageMinLength)])],
    });
  }

  createContact(contactForm) {
    if (contactForm.status === 'VALID') {
      var form = contactForm;
      var reqObj = {
        contactCategory: form.get('contactCategory').value,
        fullName: form.get('fullName').value,
        email: form.get('email').value,
        mobile: form.get('mobile').value,
        message: form.get('message').value,
        isRead : 'N'
      };
      this.contactService.createContact(reqObj)
        .subscribe(data => {
          this.response = data;
          if (this.response.contactRequestId != 0) {
            this.initContactForm();
            this.toastrService.success('Thank you!', 'Your message has been successfully sent. We will contact you very soon!',{
              disableTimeOut:true
            });
          }
        }, err => {
          console.log(err);
        });
    }
  }

}
