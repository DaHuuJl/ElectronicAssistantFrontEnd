import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-menu-student',
  templateUrl: './side-menu-student.component.html',
  styleUrls: ['./side-menu-student.component.css']
})
export class SideMenuStudentComponent implements OnInit {

  // @ts-ignore
  @Input() val : number;

  constructor() { }

  ngOnInit(): void {
  }

  exit() {

  }
}
