import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';              // User |ishlashi uchun
import { CreateDTO } from '../models/create-dto';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  baseUrl:string="https://localhost:7016/api/Car/";

  constructor(private http : HttpClient) { }
  /*                         ^^^^^^^^^^ -> HttpClient togri ishlashi uchun app.module.ts da
                                              HttpClientModule import qilinishi kerak*/

  getAll():Observable<User[]>{
  //                  ^^^^ -> User model
    return this.http.get<User[]>(this.baseUrl+"GetAll");
  }

  create(data:CreateDTO):Observable<string>{
    return this.http.post<string>(this.baseUrl+"Create",data);
  }

  
  update(id:number,data:CreateDTO):Observable<string>{
    return this.http.put<string>(this.baseUrl+`Update?id=${id}`,data)
  }

  delete(id:number):Observable<string>{
    return this.http.delete<string>(this.baseUrl+`Delete?id=${id}`)
  }

  getById(id:number):Observable<User>{
    return this.http.get<User>(this.baseUrl+`GetById?id=${id}`)
  }
  
}
