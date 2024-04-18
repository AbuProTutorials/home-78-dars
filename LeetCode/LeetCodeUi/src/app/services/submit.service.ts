import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Code } from '../models/code';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {


  constructor(private http:HttpClient) { }

  submit(data:Code):Observable<string>{
    return  this.http.post<string>("https://localhost:7106/api/Compiler",data)
  }


}
