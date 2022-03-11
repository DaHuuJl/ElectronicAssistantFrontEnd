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
    //this.customMenu = customMenu
    this.customMenu = this.navigationService.getMenu(UserRole.STUDENT);
    this.authorizedUserInfo = authorizedUserInfo;
  }

  public getCustomMenu(): Menu[] {
    return this.customMenu;
  }

  public getAuthorizedUser(): IUser {
    return this.authorizedUserInfo;
  }
}
