import {Menu} from "../model/Menu";
import {UserRole} from "../model/Enums";
import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class NavigationService {

  private studentMenu: Menu[] = [
    new Menu("Главная", "/"),
    new Menu("Расписание", "/schedule"),
    new Menu("Зачётная книжка", "/grade-book"),
    new Menu("Получить справку", "/certificate"),
    new Menu("Мои документы", "/documents"),
    new Menu("События", "/events"),
    new Menu("Вакансии", "/"),
  ]

  private teacherMenu: Menu[] = [
    new Menu("", ""),
    new Menu("", ""),
    new Menu("", ""),
    new Menu("", ""),
    new Menu("", ""),
    new Menu("", ""),
    new Menu("", ""),
    new Menu("", ""),
  ]

  private secondMenu: Menu[] = [
    new Menu("", ""),
    new Menu("", ""),
    new Menu("", ""),
    new Menu("", ""),
    new Menu("", ""),
    new Menu("", ""),
    new Menu("", ""),
    new Menu("", ""),
  ]

  public getMenu(role: UserRole): Menu[] {
    switch(role) {
      case UserRole.STUDENT:
        return this.studentMenu;
      case UserRole.TEACHER:
        return this.teacherMenu;
      case UserRole.SECOND:
        return this.secondMenu;
    }
  }
}
