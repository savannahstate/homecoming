import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(name: string, email: string, phone: string, message: string) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    let data = {
      subject: 'Homecoming Questions/Comments',
      plainTextContent: '',
      htmlContent: message,
      from: { Email: email, Name: name },
      tos: [{ Email: 'web@savannahstate.edu', Name: '' },
      { Email: 'saundersj@savannahstate.edu', Name: '' }],
      mailKey: 'A127605460G617602B'
    };
    return this.http.post("https://www.savannahstate.edu/api/SSUEmail/SendMail", data, options);
  }
}
