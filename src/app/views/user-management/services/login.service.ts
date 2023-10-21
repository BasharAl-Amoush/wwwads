import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { logindata } from 'src/app/user-management/login/post.login.model';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private cookieService: CookieService,) { }

  loginuser(login: { email: string, password: string }) : Observable<logindata>  {
    const body = { email: login.email, password: login.password };
    return this.http.post<logindata>('/api/v1/auth/authenticate', body).pipe(
      tap(responseData => {
        this.cookieService.set('access_token', responseData.access_token);
        this.cookieService.set('refresh_token', responseData.refresh_token);
      }),
      catchError((error) => {
        console.error('Error fetching data from API', error);
        throw error; 
      })
    );
  }
}
