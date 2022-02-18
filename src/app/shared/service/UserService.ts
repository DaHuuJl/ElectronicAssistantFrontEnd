import {HttpClient} from "@angular/common/http";
import {IUser} from "../model/Model";

export class UserService {

/*
  user: IUser = new class implements IUser {
    id: number = 1;
  }
*/

  constructor(private http:HttpClient) {}

}
