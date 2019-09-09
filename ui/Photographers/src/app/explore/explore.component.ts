import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ExploreService } from './explore.service';
import { ContactService } from './../contact/contact.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  eventCards: any;

  constructor(private eventService: ExploreService, private router : Router, private contactService : ContactService) { }

  ngOnInit() {
    this.initEventCard();
  }

  initEventCard() {
    this.eventService.getAllEvents()
      .subscribe(data => {
        this.eventCards = data;
      }, err => {
        console.log(err);
      });
  }

  goToContact(){
    this.contactService.setRequestType("Book Tickets");
    this.router.navigateByUrl('/contact');
  }

}
