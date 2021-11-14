import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-side-menu-student',
  templateUrl: './side-menu-student.component.html',
  styleUrls: ['./side-menu-student.component.css']
})
export class SideMenuStudentComponent implements OnInit {

  @Input() selectedMenuItem!: number;
  @Output() onClickBurger = new EventEmitter;

  constructor() {
  }

  ngOnInit(): void {
  }

  exit() {

  }

  clickBurger() {
    this.onClickBurger.emit()
  }
}
