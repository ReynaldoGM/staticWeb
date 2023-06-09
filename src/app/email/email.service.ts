import { Injectable } from '@angular/core';
import { Observable, throwError,of,interval} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError,startWith, switchMap } from 'rxjs/operators';


@Injectable()
export class EmailService {
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  // mailGet = 'https://node-mail-sender-9lk5.onrender.com';
  // mailUrl = 'https://node-mail-sender-9lk5.onrender.com/sendEmail';


  mailGet = 'http://localhost:3000';
  mailUrl = 'http://localhost:3000/sendEmail';
  mailUrlContact = 'http://localhost:3000/sendEmailContact';

  sendMail(bodyMail: string): Observable<string> {
    return this.http.post<string>(this.mailUrl, bodyMail, this.httpOptions);
  }


  sendEmailContact(bodyMail: string): Observable<string> {
      return this.http.post<string>(this.mailUrlContact, bodyMail, this.httpOptions);
    }



  getMail():Observable<string>{
    return this.http.get<string>(this.mailGet,this.httpOptions);
  }

}
