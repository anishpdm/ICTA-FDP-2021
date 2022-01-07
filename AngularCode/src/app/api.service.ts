import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getData()
  {
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }

  getNews()
  {
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=9b6ac262eea44bcbbf80ae1b064f631d")
  }


}
