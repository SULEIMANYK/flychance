import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IPost } from '../interfaces/post';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
 private _url : string='http://localhost:3000/post/allposts';
  constructor( private http :HttpClient) { 
   
  }
  getposts () : Observable<IPost[]>{
      return this.http.get<IPost[]>(this._url);
  }
}
