import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { OAuthService, NullValidationHandler, AuthConfig } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() burgerStatusHide!: boolean
  @Input() burgerHide!: boolean
  @Output() onClickBurger = new EventEmitter

  constructor(private oauthService: OAuthService, private http:HttpClient ) {
    this.configure();
  }
  authConfig: AuthConfig = {
    issuer: 'http://localhost:9080/auth/realms/master',
    redirectUri: window.location.origin + "/home",
    clientId: 'electronicassistant-front',
    scope: 'email',
    responseType: 'code',
    // at_hash is not present in JWT token
    disableAtHashCheck: true,
    showDebugInformation: true
  }

  public login() {
    this.oauthService.initLoginFlow();
  }

  public logoff() {
    this.oauthService.logOut();
  }

  private configure() {
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new  NullValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  ngOnInit(): void {
  }

  clickBurger() {
    this.onClickBurger.emit()
  }

  habr() {
      let url = '/api/UTest'
      this.http.get<TUser[]>(url)
        .subscribe({
          next: (result) => {
            console.log(result);
          },
          error: (e) => console.error(e)
        });
    }
}

export interface TUser{
  id: number
  name: string
}
