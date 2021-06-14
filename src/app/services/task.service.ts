import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/index";
import { ApiResponse } from "../models/api.response";

@Injectable()
export class TaskService {

  baseQueryUrl: string = 'http://localhost:8080/task/';
  query: string = '';

  constructor(private http: HttpClient) { }

  getSalutation(): Observable<ApiResponse> {
    this.query = "name";
    return this.http.get<ApiResponse>(this.baseQueryUrl + this.query);
  }
}
