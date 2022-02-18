import { Component, OnInit } from '@angular/core';
import {AuthorizedUserService} from "../shared/service/AuthorizedUserService";
import {Menu} from "../shared/model/Menu";

@Component({
  selector: 'app-test-menu',
  templateUrl: './test-menu.component.html',
  styleUrls: ['./test-menu.component.css']
})
export class TestMenuComponent implements OnInit {
  menu: Menu[]

  constructor(private authorizedUserService: AuthorizedUserService) {
    authorizedUserService.setValues({email: "asdf@mail.ru"})
    this.menu = authorizedUserService.getCustomMenu()
  }

  ngOnInit(): void {
  }

}
