import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  /* getProfile(githubUsername: string): Observable<any> {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`).pipe(
      catchError(this.handleErrors)
    );
  } */

  getRepos(githubUsername: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`https://api.github.com/users/${githubUsername}/repos`).pipe(
      catchError(this.handleErrors)
    );
  }
  getUser(username: string): Observable<any> {
    return this.httpClient.get(`https://api.github.com/users/${username}`).pipe(
      catchError(this.handleErrors)
    );
  }

  private handleErrors(error: HttpErrorResponse) {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      errorMessage = `MESSAGE: ${error.error.message}`;
    } else {
      errorMessage = `STATUS: ${error.status} MESSAGE: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
