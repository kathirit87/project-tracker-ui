import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskDetails } from './tasklist/tasklist.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api = 'http://localhost:8080/projectmgmt/api/v1/member/list/';
 // header: HttpHeaders;
  constructor(private httpClient: HttpClient) { }

  fetchTaskFromServer(memberId: number |undefined ) {
    return this.httpClient.get<TaskDetails>(this.api+memberId);
  }
}
