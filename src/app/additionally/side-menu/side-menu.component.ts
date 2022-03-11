import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Menu} from "../../shared/menu/Menu";
import {AuthorizedUserService} from "../../shared/service/AuthorizedUserService";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  menu: Menu[]

  @Input() menuPath!: string;
  @Output() onClickBurger = new EventEmitter;


  constructor(private authorizedUserService: AuthorizedUserService) {
    authorizedUserService.setValues({email: "asdf@mail.ru"})
    this.menu = authorizedUserService.getCustomMenu()
  }

  ngOnInit(): void {
  }

  exit() {

  }

  clickBurger() {
    this.onClickBurger.emit()
  }

  public eqv(path :string) {
    if(this.menuPath === '/') {
      return path === this.menuPath;
    }
    return path.includes(this.menuPath);
  }
}
