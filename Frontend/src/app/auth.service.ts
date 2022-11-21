import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // apiUrl:String = 'http://localhost:5000/api'
  apiUrl:String = 'api'

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(`${this.apiUrl}/blog`)
  }

  addComment(id:any, data:any){
    return this.http.put(`${this.apiUrl}/blog/${id}`,{data,id})
  }

  following(id:any,status:any,count:any){
    return this.http.put(`${this.apiUrl}/blog/follow/${id}`,{id,status,count})
  }


}
