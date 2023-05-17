import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}
  url = 'http://192.168.1.30:8080/ng/address/4';

  sendTest() {
    return this.http.get<any>(this.url);
  }
}
