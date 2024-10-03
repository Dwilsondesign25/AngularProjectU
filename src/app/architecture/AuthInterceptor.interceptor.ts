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
        if (this.authServe.token !== ""){
            const autheticatedRequest = req.clone({
                headers: req.headers.append("Authorization", "Bearer " + this.authServe.token) 
            })
            return next.handle(req);
        } else if(
                req.url.toLowerCase().includes("login") ||
                req.url.toLowerCase().includes("register")
        ){
            return next.handle(req);
        } else {
        // return next.handle(req);
        return EMPTY;
        }
    }
    
}