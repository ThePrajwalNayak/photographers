import { Component, OnInit } from '@angular/core';
import { ContactService } from './../contact/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-honeymoon-photographer',
  templateUrl: './honeymoon-photographer.component.html',
  styleUrls: ['./honeymoon-photographer.component.scss']
})
export class HoneymoonPhotographerComponent implements OnInit {
  
   window: any;
  constructor(private contactService : ContactService, private router : Router) { }


  ngOnInit() {

     if (window['FB']) {
        window['FB'].XFBML.parse();
    }
  }

  goToContact(){
    this.contactService.setRequestType("Honeymoon Photography");
    this.router.navigateByUrl('/contact');
  }

}
