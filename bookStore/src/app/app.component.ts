import { Component, OnInit } from '@angular/core';
import { Libro, ResponseGeneric, Seller, Vendedor } from './models';
import { SellerService } from './services/seller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bookStore';
  newVendedor:Vendedor = {}
  newLibro:Libro = {}
  vendedores:Vendedor[] = []
  listVendedor:Seller[] = []
  seller:Seller ={}
  book :Libro={}
  books:Libro[] = []

  constructor(
    private sellerService:SellerService
  ){}

  ngOnInit(): void {
    this.verVendedores()
    this.listarVendedores()
  }

  crearVendedor(){
    this.sellerService.create(this.newVendedor).subscribe(
      (res:ResponseGeneric) => {
        if(res.status == 200){
          this.newVendedor = {}
          this.verVendedores()
          this.listarVendedores()
        } 
        else alert(res.msg)
      }
    )
  }

  modificarVendedor(){
    this.sellerService.update(this.newVendedor).subscribe(
      (res:ResponseGeneric) => {
        if(res.status == 200){
          this.verVendedores()
          this.listarVendedores()
        } 
        else alert(res.msg)
      }
    )
  }

  verVendedores(){
    this.sellerService.read().subscribe(
      (res:ResponseGeneric) => {
        this.vendedores = res.data
      }
    )
  }

  editarVendedor(v:Vendedor){
    this.newVendedor = v
  }

  listarVendedores(){
    this.sellerService.listar().subscribe(
      (res:ResponseGeneric) => {
        console.log(res.data)
        this.listVendedor = res.data
      }
    )
  }

}
