import { Component, OnInit } from '@angular/core';
import {MatDrawer, MatDrawerMode} from "@angular/material/sidenav";

@Component({
  selector: 'app-vacancy-page',
  templateUrl: './vacancy-page.component.html',
  styleUrls: ['./vacancy-page.component.css']
})
export class VacancyPageComponent implements OnInit {

  menuNumber = 7;
  menuStatus!: boolean
  burgerHide!: boolean
  burgerStatusHide!: boolean

  mode: MatDrawerMode = "over"

  constructor() {
    if(window.screen.availWidth >= 1000) {
      this.mode = "side"
      //Нужно ли скрывать бургер? да/нет
      this.burgerStatusHide = true
      //
      this.menuStatus = false
      //Бургер скрыт? да/нет
      this.burgerHide = true

    } else {
      this.mode = "over"

      this.burgerHide = false
      this.menuStatus = false

    }
  }

  ngOnInit(): void {

  }

  menuStatusReplace() {
    this.menuStatus! = !this.menuStatus
    this.burgerHide = !this.burgerHide
    this.asndn()
  }

  menuStatusReplace2() {

    this.asndn()
  }

  asndn() {
    let element: HTMLElement = document.getElementById('ddddrawer') as HTMLElement;
    element.click();
  }
}
