import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { UserData } from '../get.userData';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor( private http: HttpClient) { }

  
  getAllUsers(headers: HttpHeaders): Observable<UserData[]> {
    const apiEndpoint = '/api/v1/users';
    const requestOptions = {
      headers: headers
    };

    return this.http.get<UserData[]>(apiEndpoint, requestOptions).pipe(
      tap(responseData => {
2      }),
      catchError(error => {
        console.error('Error fetching data from API', error);
        throw error; // Rethrow the error to be handled by the calling component
      })
    );
  }



}
