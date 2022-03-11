import { Component, OnInit } from '@angular/core';
import {MatDrawerMode} from "@angular/material/sidenav";

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {

  public menuPath = 'events';
  menuStatus!: boolean
  burgerHide!: boolean
  burgerStatusHide!: boolean
  mode!: MatDrawerMode

  constructor() {
  }

  ngOnInit(): void {
    if(window.screen.availWidth >= 1000) {
      this.mode = "side"
      this.burgerStatusHide = true
      this.menuStatus = false
      this.burgerHide = false

      this.clickOnButton()
    } else {
      this.mode = "over"
      this.menuStatus = false
      this.burgerHide = false
    }
  }

  menuStatusReplace() {
    this.menuStatus = !this.menuStatus
    this.burgerHide = !this.burgerHide
    this.clickOnButton()
  }

  clickOnButton() {
    let element: HTMLElement = document.getElementById('toggle') as HTMLElement;
    element.click();
  }
}
