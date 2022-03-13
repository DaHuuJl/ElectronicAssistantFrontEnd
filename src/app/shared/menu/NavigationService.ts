import {Menu} from "./Menu";
import {UserRole} from "../model/Enums";
import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class NavigationService {

  private studentMenu: Menu[] = [
    new Menu("Главная", "/", "../../../assets/home.svg", "home"),
    new Menu("Расписание", "/schedule", "../../../assets/calendar.svg", "calendar"),
    new Menu("Зачётная книжка", "/grade-book", "../../../assets/note.svg", "note"),
    new Menu("Получить справку", "/certificate", "../../../assets/new_file.svg", "new_file"),
    new Menu("Мои документы", "/documents", "../../../assets/documents.svg", "documents"),
    new Menu("События", "/events", "../../../assets/world.svg", "world"),
    new Menu("Вакансии", "/vacancy", "../../../assets/work.svg", "work"),
  ]

  private teacherMenu: Menu[] = [
    new Menu("Главная", "/", "../../../assets/home.svg", "home"),
    new Menu("Расписание", "/schedule", "../../../assets/calendar.svg", "calendar"),
    new Menu("Электронные ведомости", "/vedomost", "../../../assets/documents.svg", "documents"),
    new Menu("Списки групп", "/groups", "../../../assets/documents.svg", "documents"),
  ]

  private officeMenu: Menu[] = [
    new Menu("Главная", "/", "../../../assets/home.svg", "home"),
    new Menu("", "", "", ""),
    new Menu("", "", "", ""),
    new Menu("", "", "", "")
  ]

  private secondMenu: Menu[] = [
    new Menu("Главная", "/", "../../../assets/home.svg", "home"),
    new Menu("", "", "", ""),
    new Menu("", "", "", ""),
    new Menu("", "", "", "")
  ]

  public getMenu(role: UserRole): Menu[] {
    switch(role) {
      case UserRole.STUDENT:
        return this.studentMenu;
      case UserRole.TEACHER:
        return this.teacherMenu;
      case UserRole.OFFICE:
        return this.officeMenu;
      case UserRole.SECOND:
        return this.secondMenu;
    }
  }
}
