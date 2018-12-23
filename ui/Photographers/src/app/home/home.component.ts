import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videoCards : any;

  constructor() { }

  ngOnInit() {
    this.initVideoCard();
  }

  initVideoCard(){
    this.videoCards = [
      {
      photographer : 'Carla Houston',
      photographerImage : 'Carla Houston.jpeg',
      video : 'video1.mp4',
      time : 1
    },
    {
      photographer : 'Jim Hayden',
      photographerImage : 'Jim Hayden.jpeg',
      video : 'video2.mp4',
      time : 2
    },
    {
      photographer : 'Kaitlyn Kristy',
      photographerImage : 'Kaitlyn Kristy.jpeg',
      video : 'video3.mp4',
      time : 2
    },
    {
      photographer : 'Natosha Jacobs',
      photographerImage : 'Natosha Jacobs.jpg',
      video : 'video4.mp4',
      time : 3
    },
    {
      photographer : 'Neha Sharma',
      photographerImage : 'Neha Sharma.jpeg',
      video : 'video5.mp4',
      time : 5
    },
    {
      photographer : 'Richard Jones',
      photographerImage : 'Richard Jones.jpeg',
      video : 'video6.mp4',
      time : 6
    }
    ];
  }

}
