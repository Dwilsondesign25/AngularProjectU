import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { EMPTY, Observable } from "rxjs";
import { AuthService } from "../services/auth-service.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(
        private authServe: AuthService
    ) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const windowLocation: string = window.location.href;

        let rootUrl = "http://localhost:3000/";

        if (!windowLocation.toLocaleLowerCase().includes("localhost")) {
            rootUrl = "http://myProductionAPI";
        }
        const apiRootRequest = req.clone({
            url: rootUrl + req.url
        })
        if (this.authServe.token !== ""){
            const autheticatedRequest = apiRootRequest.clone({
                headers: apiRootRequest.headers.append("Authorization", "Bearer " + this.authServe.token) 
            })
            return next.handle(autheticatedRequest);
        } else if(
                req.url.toLowerCase().includes("login") ||
                req.url.toLowerCase().includes("register")
        ){
            return next.handle(apiRootRequest);
        } else {
        // return next.handle(req);
        return EMPTY;
        }
    }
    
}