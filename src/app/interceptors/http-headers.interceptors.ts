import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': 'ece058f066mshd51d33025e92235p189850jsnbd162d85aea7',
        'x-rapidapi-host': 'rawg-vidoe-games-database.p.rapidapi.com',
      },
      setParams: {
        key: '0d2fadfa40714e80939e5f58268339e5',
      }
    });
    return next.handle(req);
  }
}
