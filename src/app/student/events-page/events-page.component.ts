import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {
  menuNumber = 6;

  constructor() { }

  ngOnInit(): void {
  }

}
