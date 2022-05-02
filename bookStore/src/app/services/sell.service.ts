import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseGeneric, Venta } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SellService {

  private url = "http://server:5010/sell"
  constructor(
    private http: HttpClient
  ) { }

  create(sell:Venta):Observable<ResponseGeneric>{
    return this.http.post<ResponseGeneric>(this.url, sell)
  }

  update(sell:Venta):Observable<ResponseGeneric>{
    return this.http.put<ResponseGeneric>(this.url, sell)
  }

  read(id?:number):Observable<ResponseGeneric>{
    if(id) return this.http.get<ResponseGeneric>(this.url + `?id=${id}`)
    return this.http.get<ResponseGeneric>(this.url)
  }
}
