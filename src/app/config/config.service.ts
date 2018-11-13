import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  configUrl='http://localhost:3000/post/allposts'
  constructor(private http: HttpClient) { }
  getConfig() {
    return this.http.get(this.configUrl);
  }
}