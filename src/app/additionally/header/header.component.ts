import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { OAuthService, NullValidationHandler, AuthConfig } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name?: string;
  sso! : Sso;

  private server2Url = 'http://localhost:8080/users/keycloak';
  @Input() burgerStatusHide!: boolean
  @Input() burgerHide!: boolean
  @Output() onClickBurger = new EventEmitter

  constructor(private oauthService: OAuthService, private http:HttpClient ) {
    this.configure();
  }
  authConfig: AuthConfig = {
    issuer: 'http://localhost:9080/auth/realms/electronicassistant',
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
    sessionStorage.removeItem('list_roles')
    this.oauthService.logOut();
  }

  private configure() {
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(result => {
      if(result) {
        try {
          // const map = new Map();
          // for(let i=0; i<sessionStorage.length; i++) {
          //   let key = sessionStorage.key(i);
          //   map.set(key, sessionStorage.getItem(key!));
          // }
          // console.log(map);
          // this.sso = {
          //   list_roles: sessionStorage.getItem('list_roles')!,
          //   refresh_token: sessionStorage.getItem('refresh_token')!,
          //   expires_at: sessionStorage.getItem('expires_at')!,
          //   id_token_expires_at: sessionStorage.getItem('id_token_expires_at')!,
          //   PKCE_verifier: sessionStorage.getItem('PKCE_verifier')!,
          //   nonce: sessionStorage.getItem('nonce')!,
          //   access_token_stored_at: sessionStorage.getItem('access_token_stored_at')!,
          //   id_token_stored_at: sessionStorage.getItem('id_token_stored_at')!,
          //   id_token: sessionStorage.getItem('id_token')!,
          //   access_token: sessionStorage.getItem('access_token')!,
          //   id_token_claims_obj: sessionStorage.getItem('id_token_claims_obj')!,
          //   session_state: sessionStorage.getItem('session_state')!,
          //   granted_scopes: sessionStorage.getItem('granted_scopes')!
          // }
          //
          // this.http.post(this.server2Url,this.sso).subscribe()
          let dataToken: any = jwt_decode(sessionStorage.getItem('access_token')!)
          let roles = dataToken.realm_access.roles;
          this.name = `${dataToken.family_name} ${dataToken.given_name} ${dataToken.patronymic}`
          sessionStorage.setItem('list_roles', roles.join(','));
        } catch(Error) {
          console.log("OOPS!!!Invalide decode access_token");
        }
      }
    });
  }

  ngOnInit(): void {
  }

  clickBurger() {
    this.onClickBurger.emit()
  }

  habr() {
      let url = '/api/UTest'
      this.http.get(url)
        .subscribe({
          next: (result) => {
            console.log(result);
          },
          error: (e) => console.error(e)
        });
    }

  test() {
    this.http.get<String>('/apis/normal-student').subscribe({ next: (result) => {console.log(result);},
    error: (e) => console.error(e)})
  }
}

export interface TUser{
  id: number
  name: string
}

export interface Sso{
  list_roles: string;
  refresh_token: string;
  expires_at: string;
  id_token_expires_at: string;
  PKCE_verifier: string;
  nonce: string;
  access_token_stored_at: string;
  id_token_stored_at: string;
  id_token: string;
  access_token: string;
  id_token_claims_obj: string;
  session_state: string;
  granted_scopes: string;
}
