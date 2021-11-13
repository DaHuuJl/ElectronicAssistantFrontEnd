import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-documents-page',
  templateUrl: './documents-page.component.html',
  styleUrls: ['./documents-page.component.css']
})
export class DocumentsPageComponent implements OnInit {
  menuNumber = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
