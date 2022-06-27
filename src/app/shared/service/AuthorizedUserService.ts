import {Menu} from "../menu/Menu";
import {IUser} from "../model/Model";
import {NavigationService} from "../menu/NavigationService";
import {UserRole} from "../model/Enums";
import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AuthorizedUserService {
  private customMenu!: Menu[];
  private authorizedUserInfo!: IUser;

  constructor(private navigationService: NavigationService) {}

  public setValues(authorizedUserInfo: IUser) {

    let data = sessionStorage.getItem('list_roles');

    let roles = undefined;
    if (data != undefined) {
      roles = data.split(',');
    }
    if (roles == undefined) {
      this.customMenu = this.navigationService.getMenu(UserRole.SECOND);
    } else if (roles.includes('student')) {
      this.customMenu = this.navigationService.getMenu(UserRole.STUDENT);
    } else if (roles.includes('admin')) {
      this.customMenu = this.navigationService.getMenu(UserRole.TEACHER);
    }
    this.authorizedUserInfo = authorizedUserInfo;
  }

  public getCustomMenu(): Menu[] {
    return this.customMenu;
  }

  public getAuthorizedUser(): IUser {
    return this.authorizedUserInfo;
  }
}
