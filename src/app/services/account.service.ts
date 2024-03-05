import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient) { }
  getAllAccount():Observable<any>{
    return this.httpClient.get('http://localhost:8090/accounts');
  }
}