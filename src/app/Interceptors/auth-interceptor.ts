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
//       return Observable.throw(err);
//     });
//   }
// }
