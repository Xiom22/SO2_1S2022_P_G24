import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseGeneric, Vendedor } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  private url = "http://server:5010/seller"
  constructor(
    private http: HttpClient
  ) { }

  create(seller:Vendedor):Observable<ResponseGeneric>{
    return this.http.post<ResponseGeneric>(this.url, seller)
  }

  update(seller:Vendedor):Observable<ResponseGeneric>{
    return this.http.put<ResponseGeneric>(this.url, seller)
  }

  read(id?:number):Observable<ResponseGeneric>{
    if(id) return this.http.get<ResponseGeneric>(this.url + `?id=${id}`)
    return this.http.get<ResponseGeneric>(this.url)
  }

  listar():Observable<ResponseGeneric>{
    return this.http.get<ResponseGeneric>(this.url + "/list")
  }

}
