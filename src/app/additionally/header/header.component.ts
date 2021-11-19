import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() burgerStatusHide!: boolean
  @Input() burgerHide!: boolean
  @Output() onClickBurger = new EventEmitter
  menuItemName: any = "DEFAULT";

  constructor() { }

  ngOnInit(): void {
  }

  clickBurger() {
    this.onClickBurger.emit()
  }
}
