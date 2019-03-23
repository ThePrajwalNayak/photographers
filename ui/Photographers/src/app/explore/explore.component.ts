import { Component, OnInit } from '@angular/core';

import { ExploreService } from './explore.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  eventCards: any;

  constructor(private eventService: ExploreService) { }

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
}
