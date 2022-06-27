// import {Injectable} from "@angular/core";
// import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
// import {Router} from "@angular/router";
// import {Observable} from "rxjs";
//
// @Injectable()
// export class AuthInterceptor implements HttpInterceptor
// {
//
//   constructor(private _router: Router) { }
//
//
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
//   {
//     let token = localStorage.getItem('api-token');
//
//     if (token) {
//       req = req.clone({
//         setHeaders: {
//           'api-token': token
//         }
//       } );
//     }
//
//     return next.handle(req).catch(err => {
//       console.log(err);
//       if (err.status === 401) {
//         if (err.error.message == "Token is exp") {
//           //Genrate params for token refreshing
//           let params = {
//             token: token,
//             refreshToken: localStorange("refreshToken");
//           };
//           return this.http.post('localhost:8080/auth/refresh', params).flatMap(
//             (data: any) => {
//               //If reload successful update tokens
//               if (data.status == 200) {
//                 //Update tokens
//                 localStorange.setItem("api-token", data.result.token);
//                 localStorange.setItem("refreshToken", data.result.refreshToken);
//                 //Clone our fieled request ant try to resend it
//                 req = req.clone({
//                   setHeaders: {
//                     'api-token': data.result.token
//                   }
//                 });
//                 return next.handle(req).catch(err => {
//                   //Catch another error
//                 });
//               }else {
//                 //Logout from account
//               }
//             }
//           );
//         }else {
//           //Logout from account or do some other stuff
//         }
//       }
//       return Observable.throw(err);
//     });
//
//
//   }
// }
