import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro, ResponseGeneric } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url = "http://server:5010/book"
  constructor(
    private http: HttpClient
  ) { }

  create(book:Libro):Observable<ResponseGeneric>{
    return this.http.post<ResponseGeneric>(this.url, book)
  }

  update(book:Libro):Observable<ResponseGeneric>{
    return this.http.put<ResponseGeneric>(this.url, book)
  }

  read(id?:number):Observable<ResponseGeneric>{
    if(id) return this.http.get<ResponseGeneric>(this.url + `?id=${id}`)
    return this.http.get<ResponseGeneric>(this.url)
  }
}
