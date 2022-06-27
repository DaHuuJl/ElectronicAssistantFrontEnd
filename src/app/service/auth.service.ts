// // // import {HttpClient} from "@angular/common/http";
// // //
// // // export class AuthService implements AuthRefreshProvider {
// // //   constructor(client: HttpClient) { }
// // // }
// // //
// // // public renewAuth(): Observable < string > {
// // //   if(!this.isNeedRefreshToken()) {
// // //   return Observable.empty<string>();
// // // }
// // // return this._http.post<string>(`https://${authConfig.domain}/oauth/token`,
// // //   {
// // //     client_id: authConfig.clientID,
// // //     grant_type: 'refresh_token',
// // //     refresh_token: localStorage.getItem('refresh_token')
// // //   }).do(res => this.onAuthRenew(res));
// // // }
// // //
// // // public isNeedRefreshToken(): boolean {
// // //   //expires_at - время когда токен должен истечь, записано при логине или после очередного рефреша
// // //   let expiresAtString = localStorage.getItem('expires_at');
// // //   if (!expiresAtString) {
// // //     return false;
// // //   }
// // //
// // //   const expiresAt = JSON.parse(expiresAtString);
// // //   //считаем, что токен нужно рефрешить не когда он уже истек, а за минуту до его невалидности
// // //   let isExpireInMinute = new Date().getTime() > (expiresAt - 60000);
// // //   return isExpireInMinute;
// // // }
// //
// // import { HttpClient } from '@angular/common/http';
// // import { Injectable } from '@angular/core';
// // import { catchError, map, mapTo, Observable, of, tap } from 'rxjs';
// // import {AuthConfig, NullValidationHandler, OAuthService} from "angular-oauth2-oidc";
// // import jwt_decode from "jwt-decode";
// //
// //
// // @Injectable({providedIn: 'root'})
// // export class AuthService {
// //
// //   private readonly JWT_TOKEN = 'JWT_TOKEN';
// //   private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
// //   private readonly USER_ROLES = 'USER_ROLES';
// //   private readonly USER_ID = 'USER_ID';
// //   private readonly REMEMBER = 'REMEMBER';
// //   private loggedUser?: string = "";
// //
// //
// //   constructor(private oauthService: OAuthService, private http:HttpClient) {
// //     this.configure()
// //   }
// //
// //   login(){
// //     this.oauthService.initLoginFlow();
// //   }
// //
// //   logout() {
// //     const refreshJwtRequest: RefreshJwtRequest = new RefreshJwtRequest(this.getRefreshToken()!);
// //     return this.http.post<any>('api/auth/logout', refreshJwtRequest).pipe(
// //       tap(() => this.doLogoutUser()),
// //       mapTo(true),
// //       catchError(error => {
// //         console.log(error.error);
// //         return of(false);
// //       })
// //     );
// //   }
// //
// //   isLoggedIn() {
// //     return !!this.getJwtToken();
// //   }
// //
// //   public clearStorage(): void {
// //     this.removeTokens();
// //   }
// //
// //   refreshToken() {
// //     const refreshJwtRequest: any = new RefreshJwtRequest(this.getRefreshToken()!);
// //     return this.http.post<any>('api/auth/token', refreshJwtRequest).pipe(tap((tokens: JwtResponse) => {
// //       this.storeJwtToken(tokens.accessToken!);
// //     }));
// //   }
// //
// //   getJwtToken() {
// //     return localStorage.getItem(this.JWT_TOKEN);
// //   }
// //
// //   getUserId() {
// //     return localStorage.getItem(this.USER_ID);
// //   }
// //
// //   getRoles() {
// //     return [...localStorage.getItem(this.USER_ROLES)?.split(",")!];
// //   }
// //
// //   setRoles(roles: string[]) {
// //     localStorage.setItem(this.USER_ROLES, roles.join(','));
// //   }
// //
// //   private doLoginUser(username?: string, tokens?: JwtResponse, rememberMe?: boolean) {
// //     this.loggedUser = username;
// //     this.storeTokens(tokens!, rememberMe!);
// //   }
// //
// //   private doLogoutUser() {
// //     this.loggedUser = undefined;
// //     this.removeTokens();
// //   }
// //
// //   private getRefreshToken() {
// //     return localStorage.getItem(this.REFRESH_TOKEN);
// //   }
// //
// //   private storeJwtToken(jwt: string) {
// //     localStorage.setItem(this.JWT_TOKEN, jwt);
// //   }
// //
// //   private storeTokens(tokens: JwtResponse, rememberMe: boolean) {
// //     localStorage.setItem(this.JWT_TOKEN, tokens.accessToken!);
// //     localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken!);
// //     localStorage.setItem(this.USER_ROLES, tokens.roles?.join(",")!);
// //     localStorage.setItem(this.USER_ID, String(tokens.userId!));
// //     localStorage.setItem(this.REMEMBER, String(rememberMe!));
// //   }
// //
// //   private removeTokens() {
// //     localStorage.removeItem(this.JWT_TOKEN);
// //     localStorage.removeItem(this.REFRESH_TOKEN);
// //     localStorage.removeItem(this.USER_ROLES);
// //     localStorage.removeItem(this.USER_ID);
// //     localStorage.removeItem(this.REMEMBER);
// //   }
// //
// //   private configure() {
// //     this.oauthService.configure(this.authConfig);
// //     this.oauthService.tokenValidationHandler = new NullValidationHandler();
// //   }
// //   authConfig: AuthConfig = {
// //     issuer: 'http://localhost:9080/auth/realms/electronicassistant',
// //     redirectUri: window.location.origin + "/home",
// //     clientId: 'electronicassistant-front',
// //     scope: 'email',
// //     responseType: 'code',
// //     // at_hash is not present in JWT token
// //     disableAtHashCheck: true,
// //     showDebugInformation: true
// //   }
// // }
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, defer, Observable, of } from 'rxjs';
// import { catchError, delay, filter, take, tap } from 'rxjs/operators';
//
// export interface RefreshTokenResult {
//   accessToken: string;
// }
//
// @Injectable()
// export class AuthService {
//   private tokenSubject$ = new BehaviorSubject<string | null>(null);
//
//   token$ = this.tokenSubject$.pipe(
//     filter((token) => token !== null),
//     take(1)
//   );
//
//   refreshToken$: Observable<any> = defer(() => {
//     if (this.tokenSubject$.value === null) {
//       return this.token$;
//     }
//     // Defer allows us to easily execute some action when the Observable
//     // is subscribed. Here, we set the current token to `null` until the
//     // refresh operation is complete. This ensures no requests will be
//     // sent with a known bad token.
//     this.tokenSubject$.next(null);
//
//     return this.refreshToken().pipe(
//       tap((res) => {
//         this.tokenSubject$.next(res.accessToken);
//       }),
//       catchError((err) => {
//         this.logout();
//         throw err;
//       })
//     );
//   });
//
//   get token(): string | null {
//     return this.tokenSubject$.value;
//   }
//
//   refreshToken(): Observable<RefreshTokenResult> {
//     return of({
//       accessToken: 'newToken',
//     }).pipe(
//       delay(0),
//     );
//   }
//
//   logout(): void {}
// }
