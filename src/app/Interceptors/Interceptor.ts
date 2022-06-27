import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest, HttpErrorResponse, HttpClient,
} from '@angular/common/http';
import {BehaviorSubject, catchError, filter, Observable, switchMap, take, throwError} from 'rxjs';
import {Injectable} from "@angular/core";

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {

  isRefreshingToken = false;

  constructor(private http: HttpClient) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    let clonedRequest = req.clone({ headers: req.headers.append('Authorization', `Bearer ${sessionStorage.getItem('access_token')}`) });

    return next.handle(clonedRequest).pipe(catchError (error =>{
      if (error instanceof HttpErrorResponse && error.status === 401) {
        console.log("Ops... AccessToken устарел!")
        let refreshToken = sessionStorage.getItem("refresh_token");
        let body = new URLSearchParams();
        body.set('client_id', 'electronicassistant-front');
        body.set('grant_type', 'refresh_token');
        body.set('refresh_token', refreshToken!);
        this.http.post<any>('http://localhost:9080/auth/realms/electronicassistant/protocol/openid-connect/token',
          body.toString(),
          {headers:{'Content-Type': 'application/x-www-form-urlencoded'}}
        )
          .subscribe(res => {
            console.log(sessionStorage.getItem("access_token"))
            sessionStorage.removeItem("access_token");
            sessionStorage.setItem("access_token", res.access_token);
            console.log(sessionStorage.getItem("access_token"))
            this.isRefreshingToken = true;
            console.log("AccessToken успешно обновлен!")
        })


      }
      if(this.isRefreshingToken = true){
        this.isRefreshingToken = false;
        return next.handle(clonedRequest.clone({ headers: req.headers.append('Authorization', `Bearer ${sessionStorage.getItem('access_token')}`) })).pipe();
      }
      return throwError(error);
    }));

  }
}










// refreshToken(){
//   let refreshToken = sessionStorage.getItem("refresh_token");
//   let body = new URLSearchParams();
//   body.set('client_id', 'electronicassistant-front');
//   body.set('grant_type', 'refresh_token');
//   body.set('refresh_token', refreshToken!);
//   this.http.post<any>('http://localhost:9080/auth/realms/electronicassistant/protocol/openid-connect/token',
//     body.toString(),
//     {headers:{'Content-Type': 'application/x-www-form-urlencoded'}}
//   )
//     .subscribe(res => {
//       console.log(sessionStorage.getItem("access_token"))
//       sessionStorage.removeItem("access_token");
//       sessionStorage.setItem("access_token", res.access_token);
//       console.log(sessionStorage.getItem("access_token"))
//       // next.handle(clonedRequest.clone({ headers: req.headers.append('Authorization', `Bearer ${sessionStorage.getItem('access_token')}`) })).subscribe( rez => {console.log("OK",rez)})
//       //
//       // return next.handle(clonedRequest).pipe();
//     })
// }
// private isRefreshing = false;
// private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
// tokenRefreshed$ = new BehaviorSubject<boolean>(false);
// if (!this.isRefreshing) {
//   this.isRefreshing = true;
//   this.refreshTokenSubject.next(null);
//
//   //   .pipe(
//   // switchMap((token: any) => {
//   //     console.log(token)
//   //     this.isRefreshing = false;
//   //     this.refreshTokenSubject.next(token.jwt);
//   //
//   //   })
//   // );
// } else {
//   return this.refreshTokenSubject.pipe(
//     filter(token => {
//       if (token != null) {
//         sessionStorage.setItem("access_token", token);
//       }
//       return token != null
//     }),
//     take(1),
//     switchMap(jwt => next.handle(
//       req.clone(
//         {
//           headers: req.headers.append(
//           'Authorization', `Bearer ${sessionStorage.getItem('access_token')}`
//           )
//         }
//         ))
//     ))
// }



// // Clone the request to add the new header
// let clonedRequest = req.clone({ headers: req.headers.append('Authorization', `Bearer ${sessionStorage.getItem('access_token')}`) });
//
// // Pass the cloned request instead of the original request to the next handle
